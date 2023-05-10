const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const sellerInfoModel = require('../../models/seller_info');
const sellerInfoValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');

exports.editStorDtl = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (sellerInfoValidate.sellerInfoReq(reqData)) {

    try {
      const sellerInfoId = reqData.id;
      const query = { _id: sellerInfoId };
      const sellerInfo = reqData

      sellerInfoModel.findOneAndUpdate(query, sellerInfo, function (err, data) {
        if (!data) {
          res.send({ "message": "No records found","status": 400 });
          return
        }
        if (err) {
          res.send({"status" : 500, "message": "unable to update address" });
          return
        }
        res.send({ "success": true,"status": 200 ,"message" : "Update store details successfully"});
      });


    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }
};

