const fs = require('fs');
const currency = require('currency.js');

exports.moment = require('moment');

exports.dump = (obj) => JSON.stringify(obj, null, 2);
