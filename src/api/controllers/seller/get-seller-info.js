const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const sellerInfoModel = require('../../models/seller_info');
const sellerInfoValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');


exports.getSellerInfo = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (sellerInfoValidate.CheckSellerReq(reqData)) {

    try {
      const sellerId = reqData.sellerId;
      
      const findQuery = sellerInfoModel.find({ "sellerId": sellerId });
      findQuery.select('marketplace storeDtl email phone replayToEmail');

      findQuery.exec(function (err, sellerInfoList) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : sellerInfoList })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};



