const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const returnOrderModel = require('../../models/return_order');
const cancelReturnValidate = require('../../validation/order_validation');
const validator = require('../../utils/validator');


exports.getReturnDtl = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (cancelReturnValidate.returnOrderDtlReq(reqData)) {

    try {
      const returnId = reqData.id;
      
      const findQuery = returnOrderModel.find({ "_id": returnId });

      findQuery.exec(function (err, returnOrderDtl) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : returnOrderDtl });
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};



