const mongoose = require('mongoose');
const orderCancelSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  orderId: {
    type :String
  },
  status: {
    type: String,
  },
  cancelationReason: {
    type: String,
  },
  cancelationDesc: {
    type: String,
  },

});


module.exports = mongoose.model('cancelorders', orderCancelSchema);
