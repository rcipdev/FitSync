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

  client: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: true,
    autopopulate: true,
  },

  status: {
    type: String,
    default: 'new',
  },
});

leadSchema.plugin(require('mongoose-autopopulate'));
leadSchema.index({
  name: 'text',
});
module.exports = mongoose.model('Lead', leadSchema);
