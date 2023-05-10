const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const addressModel = require('../../models/seller_invoice_address');
const addressValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');

exports.selectSellerAddress = async (req, res, next) => {

  console.log("select seller address api hit");
  let reqData = validator.requestFilter(req.body);

  if (addressValidate.editsellerAddressReq(reqData)) {

    try {
      const addressId = reqData.id;
      addressModel.bulkWrite([{ updateMany: { filter: { isActive: 1 }, update: { $set: { isActive: 0 } } } }, { updateOne: { filter: { _id: addressId }, update: { $set: { isActive: 1 } } } }], function (err, data) {
        if (!data) {
          res.send({ "message": "No records found", "status": 400 });
          return
        }
        if (err) {
          res.send({ "status": 500, "message": "unable to select address" });
          return
        }
        res.send({ "success": true, "status": 200, "message": "Address selected successfully" });
      });

    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }
};

