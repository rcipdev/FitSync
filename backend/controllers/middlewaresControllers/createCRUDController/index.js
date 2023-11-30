const mongoose = require('mongoose');

const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');
const search = require('./search');
const filter = require('./filter');
const listAll = require('./listAll');
const paginatedList = require('./paginatedList');

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
