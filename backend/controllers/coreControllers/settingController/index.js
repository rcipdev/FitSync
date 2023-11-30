const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const crudController = createCRUDController('Setting');

const settingMethods = {
  list: crudController.list,
  listAll: crudController.listAll,
};

module.exports = settingMethods;
