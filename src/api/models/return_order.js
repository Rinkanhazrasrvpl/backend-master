const mongoose = require('mongoose');
const returnOrderSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  orderId: {
    type :String
  },
  status: {
    type: String,
  },
  pickUpDate: {
    type: Date,
  },
  reqDate: {
    type: Date,
  },
  addressId: {
    type: String,
  },
  refundStatus : {
    type:String
  }
});


module.exports = mongoose.model('returnorders', returnOrderSchema);
