const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const cancelOrderModel = require('../../models/order_cancel');
const cancelOrderValidate = require('../../validation/order_validation');
const validator = require('../../utils/validator');


exports.cancelOrderDtl = async (req, res, next) => {

    console.log('Hit cancel order Dtl');

  let reqData = validator.requestFilter(req.body);

  if (cancelOrderValidate.cancelOrderReq(reqData)) {

    try {
      const orderId = reqData.orderId;
      
      const findQuery = cancelOrderModel.find({ "orderId": orderId });

      findQuery.exec(function (err, cancelOrderDtl) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : cancelOrderDtl })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};



