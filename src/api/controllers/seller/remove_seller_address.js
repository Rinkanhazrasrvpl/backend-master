const logger = require('../../../config/logger');
const addressModel = require('../../models/seller_invoice_address');
const addressValidate = require('../../validation/seller_info_validation');
const validator = require('../../utils/validator');


exports.removeSellerAddress = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (addressValidate.removeSellerAddressReq(reqData)) {

    try {
      const addressId = reqData.id;
      addressModel.findByIdAndRemove({ _id: addressId }, function (err) {
        if (err) {
          res.send({ "message": "unable to remove document by ID","status" : 500 });
          return
        }
        res.send({ "success": true,"status":200,"message": "Address remove successfully" });
      })

    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }
};
