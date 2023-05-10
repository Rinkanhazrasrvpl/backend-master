const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderDate:{type: Date},
    orderId: String,
    shipBy:{type: Date},
    deliverBy:{type: Date},
    shippingService: String,
    buyerName:String,
    fullfilmentMethod:String,
    salesChannel:String,
    sellerOrderId:String,
    productId:String,
    quantity:Number,
    customerOption:String,
    orderStatus:String,
    orderType: String,
    userId : String

});


module.exports = mongoose.model('orders', orderSchema);
