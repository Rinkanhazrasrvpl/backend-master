const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const orderModel = require('../../models/order');
const orderValidate = require('../../validation/order_validation');
const validator = require('../../utils/validator');


exports.getOrderList = async (req, res, next) => {

  console.log("hit order list api")

  let reqData = validator.requestFilter(req.body);

  if (orderValidate.orderReq(reqData)) {

    try {
      const sellerId = reqData.sellerId;

      const orderStatus = reqData.orderStatus;

      var findQuery;

      if(reqData.orderStatus == "" || reqData.orderStatus === undefined || reqData.orderStatus == null){

        findQuery = orderModel.find({ "sellerId": sellerId });

      }else{

        findQuery = orderModel.find({ "sellerId": sellerId ,"orderStatus" : orderStatus});

      }
      
    
      findQuery.exec(function (err, orderList) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : orderList })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};



