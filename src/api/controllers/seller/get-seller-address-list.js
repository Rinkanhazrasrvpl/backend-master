const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const addressModel = require('../../models/seller_invoice_address');
const addressValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');


exports.getSellerAddressList = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (addressValidate.CheckSellerReq(reqData)) {

    try {
      const sellerId = reqData.sellerId;
      
      const findQuery = addressModel.find({ "sellerId": sellerId });
      findQuery.select('name addressLine1 addressLine2 countryName stateName cityName zipCode phoneNo');


      findQuery.exec(function (err, addressList) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : addressList })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};
