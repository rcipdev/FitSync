const mongoose = require('mongoose');

const Model = mongoose.model('Invoice');

const currency = require('currency.js');
const { calculate } = require('@/helpers');
const schema = require('./schemaValidate');

const create = async (req, res) => {
  try {
    let body = req.body;

    const { error, value } = schema.validate(body);
    if (error) {
      console.log(error);
      const { details } = error;
      return res.status(400).json({
        success: false,
        result: null,
        message: details[0]?.message,
      });
    }

    const { items = [], taxRate = 0, discount = 0 } = value;

    // default
    let subTotal = 0;
    let taxTotal = 0;
    let total = 0;

    //Calculate the items array with subTotal, total, taxTotal
    items.map((item) => {
      // console.log(currency(3, {}).multiply());
      let total = currency(item['quantity']).multiply(item['price']);
      //sub total
      subTotal = currency(subTotal).add(total);
      //item total
      item['total'] = total;
    });
    taxTotal = currency(subTotal).multiply(taxRate);
    total = currency(subTotal).add(taxTotal);

    body['subTotal'] = subTotal;
    body['taxTotal'] = taxTotal;
    body['total'] = total;
    body['items'] = items;

    let paymentStatus = currency(total).subtract(discount) === 0 ? 'spent' : 'using';

    body['paymentStatus'] = paymentStatus;
    body['createdBy'] = req.admin._id;
    // Creating a new document in the collection
    const result = await new Model(body).save();
    const fileId = 'invoice-' + result._id + '.pdf';
    const updateResult = await Model.findOneAndUpdate(
      { _id: result._id },
      { pdfPath: fileId },
      {
        new: true,
      }
    ).exec();
    // Returning successfull response

    // Returning successfull response
    return res.status(200).json({
      success: true,
      result: updateResult,
      message: 'Invoice created successfully',
    });
  } catch (error) {
    console.log(error);
    // If error is thrown by Mongoose due to required validations
    if (error.name == 'ValidationError') {
      return res.status(400).json({
        success: false,
        result: null,
        error: error,
        message: 'Required fields are not supplied',
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        error: error,
        message: error.message,
      });
    }
  }
};

module.exports = create;
