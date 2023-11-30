const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const settingSchema = new mongoose.Schema({
  settingCategory: {
    type: String,
    required: true,
    lowercase: true,
  },
  settingKey: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  settingValue: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  valueType: {
    type: String,
    default: 'String',
  },
});

module.exports = mongoose.model('Setting', settingSchema);
