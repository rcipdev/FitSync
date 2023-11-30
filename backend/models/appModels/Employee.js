const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const employeeSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  walking: {
    type: String,
    required: true,
  },
  cycling: {
    type: String,
    required: true,
  },
  threadmill: {
    type: String,
    required: true,
  },
  yoga: {
    type: String,
    required: true,
  },
  caloriesBurnt: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client',
    required: true,
    autopopulate: true,
  },
});
employeeSchema.plugin(require('mongoose-autopopulate'));
employeeSchema.index({
  name: 'text',
  surname: 'text',
  birthday: 'text',
  status: 'text',
});

module.exports = mongoose.model('Employee', employeeSchema);
