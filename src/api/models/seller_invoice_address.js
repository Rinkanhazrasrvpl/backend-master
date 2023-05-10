const mongoose = require('mongoose');
const sellerAddSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  countryName: {
    type: String,
  },
  stateName: {
    type: String,
  },
  cityName: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  sellerId: {
    type: String,
  },
  isActive: {
    type: String,
  }
});


module.exports = mongoose.model('sellerAddress', sellerAddSchema);