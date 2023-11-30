require('dotenv').config({ path: __dirname + '/../.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
const fs = require('fs');
async function setupApp() {
  try {
    const Admin = require('../models/coreModels/Admin');
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash('Qwertyasd@123');

    await new Admin({
      email: 'test@gmail.com',
      password: passwordHash,
      name: 'Ruchik',
      surname: 'Pravasi',
      role: 'admin',
    }).save();

    console.log('Admin created!');

    const Setting = require('../models/coreModels/Setting');

    const financeConfig = JSON.parse(
      fs.readFileSync(__dirname + '/config/financeConfig.json', 'utf-8')
    );

    const moneyFormatConfig = JSON.parse(
      fs.readFileSync(__dirname + '/config/moneyFormatConfig.json', 'utf-8')
    );

    await Setting.insertMany([...financeConfig, ...moneyFormatConfig]);
    console.log('Settings created!');
    process.exit();
  } catch (e) {
    console.log('\nError!');
    console.log(e);
    process.exit();
  }
}

setupApp();
