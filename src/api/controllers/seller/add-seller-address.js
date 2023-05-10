const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const sellerAddModel = require('../../models/seller_invoice_address');
const addressValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');

exports.addSellerAddress = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (addressValidate.CheckSellerReq(reqData)) {

    try {
      let sellerAddData = new sellerAddModel(reqData);

      const count = await sellerAddModel.countDocuments();

      if (count == 0) {
        sellerAddData['isActive'] = 1;
        sellerAddData.save(function (err) {
          if (err) {
            res.send({ "status": 500, "message": "unable to insert document" });
            return
          }
          res.send({ "success": true, "status": 200, "message": "Address added successfully" });
        });

      } else {
        sellerAddData['isActive'] = 0;
        sellerAddData.save(function (err) {
          if (err) {
            res.send({ "status": 500, "message": "unable to insert document" });
            return
          }
          res.send({ "success": true, "status": 200, "message": "Address added successfully" });
        });

      }


      


    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};
