const mongoose = require('mongoose');

const Model = mongoose.model('Invoice');

const { calculate } = require('@/helpers');
const currency = require('currency.js');

const schema = require('./schemaValidate');

const update = async (req, res) => {
  try {
    let body = req.body;

    const { error, value } = schema.validate(body);
    if (error) {
      const { details } = error;
      return res.status(400).json({
        success: false,
        result: null,
        message: details[0]?.message,
      });
    }

    const previousInvoice = await Model.findOne({
      _id: req.params.id,
      removed: false,
    });

    const { items = [], taxRate = 0, discount = 0 } = req.body;

    if (items.length === 0) {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Items cannot be empty',
      });
    }

    // default
    let subTotal = 0;
    let taxTotal = 0;
    let total = 0;

    //Calculate the items array with subTotal, total, taxTotal
    items.map((item) => {
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
    body['total'] = total.toString();
    body['items'] = items;
    body['pdfPath'] = '';
    // Find document by id and updates with the required fields
    let paymentStatus = currency(total).subtract(discount) === 0 ? 'spent' : 'using';

    body['paymentStatus'] = paymentStatus;
    body['createdBy'] = req.admin._id;

    const result = await Model.findOneAndUpdate({ _id: req.params.id, removed: false }, body, {
      new: true, // return the new result instead of the old one
    }).exec();

    return res.status(200).json({
      success: true,
      result,
      message: 'we update this document by this id: ' + req.params.id,
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

module.exports = update;
