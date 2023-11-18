const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const { hasPermission } = require('@/middlewares/permission');

const employeeController = require('@/controllers/appControllers/employeeController');
const clientController = require('@/controllers/appControllers/clientController');
const invoiceController = require('@/controllers/appControllers/invoiceController');
const expenseCategoryController = require('@/controllers/appControllers/expenseCategoryController');
const paymentController = require('@/controllers/appControllers/paymentController');

router
  .route('/employee/create')
  .post(hasPermission('create'), catchErrors(employeeController.create));
router.route('/employee/read/:id').get(hasPermission('read'), catchErrors(employeeController.read));
router
  .route('/employee/update/:id')
  .patch(hasPermission('update'), catchErrors(employeeController.update));
router
  .route('/employee/delete/:id')
  .delete(hasPermission('delete'), catchErrors(employeeController.delete));
router.route('/employee/search').get(hasPermission('read'), catchErrors(employeeController.search));
router.route('/employee/list').get(hasPermission('read'), catchErrors(employeeController.list));
router.route('/employee/filter').get(hasPermission('read'), catchErrors(employeeController.filter));

router.route('/client/create').post(hasPermission('create'), catchErrors(clientController.create));
router.route('/client/read/:id').get(hasPermission('read'), catchErrors(clientController.read));
router
  .route('/client/update/:id')
  .patch(hasPermission('update'), catchErrors(clientController.update));
router
  .route('/client/delete/:id')
  .delete(hasPermission('delete'), catchErrors(clientController.delete));
router.route('/client/search').get(hasPermission('read'), catchErrors(clientController.search));
router.route('/client/list').get(hasPermission('read'), catchErrors(clientController.list));
router.route('/client/filter').get(hasPermission('read'), catchErrors(clientController.filter));
router.route('/client/summary').get(hasPermission('read'), catchErrors(clientController.summary));

router
  .route('/invoice/create')
  .post(hasPermission('create'), catchErrors(invoiceController.create));
router.route('/invoice/read/:id').get(hasPermission('read'), catchErrors(invoiceController.read));
router
  .route('/invoice/update/:id')
  .patch(hasPermission('update'), catchErrors(invoiceController.update));
router
  .route('/invoice/delete/:id')
  .delete(hasPermission('delete'), catchErrors(invoiceController.delete));
router.route('/invoice/search').get(hasPermission('read'), catchErrors(invoiceController.search));
router.route('/invoice/list').get(hasPermission('read'), catchErrors(invoiceController.list));
router.route('/invoice/filter').get(hasPermission('read'), catchErrors(invoiceController.filter));

router
  .route('/expenseCategory/create')
  .post(hasPermission('create'), catchErrors(expenseCategoryController.create));
router
  .route('/expenseCategory/read/:id')
  .get(hasPermission('read'), catchErrors(expenseCategoryController.read));
router
  .route('/expenseCategory/update/:id')
  .patch(hasPermission('update'), catchErrors(expenseCategoryController.update));
router
  .route('/expenseCategory/delete/:id')
  .delete(hasPermission('delete'), catchErrors(expenseCategoryController.delete));

router
  .route('/payment/create')
  .post(hasPermission('create'), catchErrors(paymentController.create));
router.route('/payment/read/:id').get(hasPermission('read'), catchErrors(paymentController.read));
router
  .route('/payment/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentController.update));
router
  .route('/payment/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentController.delete));
router.route('/payment/search').get(hasPermission('read'), catchErrors(paymentController.search));

module.exports = router;
