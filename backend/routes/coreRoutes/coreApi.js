const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const adminController = require('@/controllers/coreControllers/adminController');
const settingController = require('@/controllers/coreControllers/settingController');

const { hasPermission } = require('@/middlewares/permission');

router.route('/admin/delete/:id').delete(hasPermission(), catchErrors(adminController.delete));
router.route('/admin/search').get(hasPermission('read'), catchErrors(adminController.search));
router.route('/admin/list').get(hasPermission('read'), catchErrors(adminController.list));
router.route('/admin/profile').get(hasPermission('read'), catchErrors(adminController.profile));
router.route('/admin/status/:id').patch(hasPermission('read'), catchErrors(adminController.status));

router
  .route('/admin/password-update/:id')
  .patch(hasPermission(), catchErrors(adminController.updatePassword));

router
  .route('/profile/update/:id')
  .patch(hasPermission(), catchErrors(adminController.updateProfile));

router.route('/setting/list').get(hasPermission('read'), catchErrors(settingController.list));
router.route('/setting/listAll').get(hasPermission('read'), catchErrors(settingController.listAll));

module.exports = router;
