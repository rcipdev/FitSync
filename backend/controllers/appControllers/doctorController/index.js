// const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
// const methods = createCRUDController('Invoice');

// const create = require('./create');
// const summary = require('./summary');
// const update = require('./update');
// const remove = require('./remove');
const list = require('./list');
// const read = require('./read');

// methods.create = create;
// methods.update = update;
// methods.delete = remove;
// methods.summary = summary;
methods.list = list;
// methods.read = read;

module.exports = methods;
