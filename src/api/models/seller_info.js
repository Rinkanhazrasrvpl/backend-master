const mongoose = require('mongoose');
const sellerInfoSchema = new mongoose.Schema({
  marketplace: {
    type: String,
  },
  storeDtl : {
    type :String
  },
  sellerId: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  replayToEmail: {
    type: String,
  }
});


module.exports = mongoose.model('sellerInfo', sellerInfoSchema);
