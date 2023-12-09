const mongoose = require('mongoose');

const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');
const search = require('./search');
const filter = require('./filter');
const listAll = require('./listAll');
const paginatedList = require('./paginatedList');
const _ = require('lodash');

const createCRUDController = (modelName) => {
  const Model = mongoose.model(modelName);
  let crudMethods = {};

  crudMethods.create = async (req, res) => {
    create(Model, req, res);
  };
  crudMethods.read = async (req, res) => {
    read(Model, req, res);
  };
  crudMethods.update = async (req, res) => {
    update(Model, req, res);
  };
  crudMethods.delete = async (req, res) => {
    remove(Model, req, res);
  };
  crudMethods.list = async (req, res) => {
    paginatedList(Model, req, res);
  };
  crudMethods.listAll = async (req, res) => {
    listAll(Model, req, res);
  };
  crudMethods.search = async (req, res) => {
    search(Model, req, res);
  };

  crudMethods.filter = async (req, res) => {
    filter(Model, req, res);
  };

  crudMethods.createLead = async (req, res) => {
    try {
      let data = {
        ...req.body,
        nutrients:
          Math.floor(Math.random() * (100 - 50) + 50) +
          Math.floor(Math.random() * (5 - 2) + 2) * Math.floor(Math.random() * (100 - 50) + 50) +
          Math.floor(Math.random() * (100 - 50) + 50) +
          Math.floor(Math.random() * (100 - 50) + 50),
      };
      const result = await new Model(data).save();
      return res.status(200).json({
        success: true,
        result,
        message: 'Successfully Created the document in Model ',
      });
    } catch (error) {
      console.log(error);
      // If error is thrown by Mongoose due to required validations
      if (error.name == 'ValidationError') {
        return res.status(400).json({
          success: false,
          result: null,
          message: 'Required fields are not supplied',
          error: error,
        });
      } else {
        // Server Error
        return res.status(500).json({
          success: false,
          result: null,
          message: error.message,
          error: error,
        });
      }
    }
  };

  crudMethods.leadSummary = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const limit = parseInt(req.query.items) || 10;
      const skip = page * limit - limit;
      const resultsPromise1 = Model.find({ removed: false })
        .skip(skip)
        .limit(limit)
        .sort({ created: 'desc' })
        .populate();
      const resultsPromise2 = mongoose
        .model('Employee')
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ created: 'desc' })
        .populate();
      let [result1, result2] = await Promise.all([resultsPromise1, resultsPromise2]);
      let datetoday = new Date().getDate() - 1;
      result1 = result1.filter((data) => {
        if (data.date.getDate() === datetoday) {
          return data;
        }
      });
      result2 = result2.filter((data) => {
        if (data.date.getDate() === datetoday) return data;
      });

      let finalres = [];
      result1.forEach((obj) => {
        let innerobj = result2.filter((iobj) => {
          return iobj.client.email === obj.client.email;
        });
        if (innerobj.length != 0) {
          let tempobj = obj;
          tempobj._doc.caloriesBurnt =
            parseInt(innerobj[0].walking) * 4 +
            parseInt(innerobj[0].cycling) * 6 +
            parseInt(innerobj[0].threadmill) * 6 +
            parseInt(innerobj[0].yoga) * 6;
          finalres.push(tempobj);
        }
      });
      return res.status(200).json({
        success: true,
        result: finalres,
        pagination: 1,
        message: 'Successfully found documents',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        result: [],
        message: error.message,
        error: error,
      });
    }
  };

  crudMethods.calculateCalories = async (req, res) => {
    const page = req.query.page || 1;
    const limit = parseInt(req.query.items) || 10;
    const skip = page * limit - limit;
    try {
      const resultsPromise = Model.find({ removed: false })
        .skip(skip)
        .limit(limit)
        .sort({ created: 'desc' })
        .populate();
      const countPromise = Model.count({ removed: false });
      let [result, count] = await Promise.all([resultsPromise, countPromise]);
      result = result.map((obj) =>
        Object.assign(obj, {
          caloriesBurnt:
            parseInt(obj.walking) * 4 +
            parseInt(obj.cycling) * 6 +
            parseInt(obj.threadmill) * 6 +
            parseInt(obj.yoga) * 6,
        })
      );
      const pages = Math.ceil(count / limit);

      const pagination = { page, pages, count };
      if (count > 0) {
        return res.status(200).json({
          success: true,
          result,
          pagination,
          message: 'Successfully found all documents',
        });
      } else {
        return res.status(203).json({
          success: true,
          result: [],
          pagination,
          message: 'Collection is Empty',
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        result: [],
        message: error.message,
        error: error,
      });
    }
  };

  return crudMethods;
};

module.exports = createCRUDController;
