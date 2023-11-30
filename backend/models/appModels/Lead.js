const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    required: true,
  },
  breakfast: {
    type: String,
    default: 'Select',
    // required: true,
  },
  lunch: {
    type: String,
    default: 'Select',
    // required: true,
  },
  snacks: {
    type: String,
    default: 'I eat nothing',
  },
  dinner: {
    type: String,
    default: 'I eat nothing',
  },
  email: {
    type: String,
    trim: true,
  },

  // country: {
  //   type: String,
  //   trim: true,
  // },
  // customField: [
  //   {
  //     fieldName: {
  //       type: String,
  //       trim: true,
  //     },
  //     fieldValue: {
  //       type: String,
  //       trim: true,
  //     },
  //   },
  // ],

  status: {
    type: String,
    default: 'new',
  },
});

module.exports = mongoose.model('Lead', leadSchema);
