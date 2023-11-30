require('dotenv').config({ path: __dirname + '/../.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

async function deleteData() {
  const Admin = require('../models/coreModels/Admin');
  const Setting = require('../models/coreModels/Setting');
  await Admin.remove();
  await Setting.remove();
  await Email.remove();
  process.exit();
}

deleteData();
