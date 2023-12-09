const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const { hasPermission } = require('@/middlewares/permission');

const employeeController = require('@/controllers/appControllers/employeeController');
const paymentModeController = require('@/controllers/appControllers/paymentModeController');
const clientController = require('@/controllers/appControllers/clientController');
const leadController = require('@/controllers/appControllers/leadController');
const invoiceController = require('@/controllers/appControllers/invoiceController');
const paymentController = require('@/controllers/appControllers/paymentController');
// const doctorsController = require('@/controllers/appControllers/doctorsController');

//workout routes
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
router
  .route('/employee/list')
  .get(hasPermission('read'), catchErrors(employeeController.calculateCalories));
router.route('/employee/filter').get(hasPermission('read'), catchErrors(employeeController.filter));

//payment modes
router
  .route('/paymentMode/create')
  .post(hasPermission('create'), catchErrors(paymentModeController.create));
router
  .route('/paymentMode/read/:id')
  .get(hasPermission('read'), catchErrors(paymentModeController.read));
router
  .route('/paymentMode/update/:id')
  .patch(hasPermission('update'), catchErrors(paymentModeController.update));
router
  .route('/paymentMode/delete/:id')
  .delete(hasPermission('delete'), catchErrors(paymentModeController.delete));
router
  .route('/paymentMode/search')
  .get(hasPermission('read'), catchErrors(paymentModeController.search));
router
  .route('/paymentMode/list')
  .get(hasPermission('read'), catchErrors(paymentModeController.list));
router
  .route('/paymentMode/filter')
  .get(hasPermission('read'), catchErrors(paymentModeController.filter));

//user routes
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

//health data
router.route('/lead/create').post(hasPermission('create'), catchErrors(leadController.createLead));
router.route('/lead/read/:id').get(hasPermission('read'), catchErrors(leadController.read));
router.route('/lead/update/:id').patch(hasPermission('update'), catchErrors(leadController.update));
router
  .route('/lead/delete/:id')
  .delete(hasPermission('delete'), catchErrors(leadController.delete));
router.route('/lead/list').get(hasPermission('read'), catchErrors(leadController.list));
router.route('/lead/filter').get(hasPermission('read'), catchErrors(leadController.filter));
router.route('/lead/summary').get(hasPermission('read'), catchErrors(leadController.leadSummary));

//budget routes
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
  .route('/invoice/pdf/:id')
  .get(hasPermission('read'), catchErrors(invoiceController.generatePDF));
router.route('/invoice/summary').get(hasPermission('read'), catchErrors(invoiceController.summary));
router
  .route('/invoice/mail')
  .post(hasPermission('create'), catchErrors(invoiceController.sendMail));

//budget spent routes
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
router.route('/payment/list').get(hasPermission('read'), catchErrors(paymentController.list));
router.route('/payment/filter').get(hasPermission('read'), catchErrors(paymentController.filter));
router.route('/payment/summary').get(hasPermission('read'), catchErrors(paymentController.summary));

//doctors
// router.route('/doctor/list').get(hasPermission('read'), catchErrors(doctorsController.list));
module.exports = router;
