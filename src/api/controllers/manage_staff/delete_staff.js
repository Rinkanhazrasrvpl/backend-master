const logger = require('../../../config/logger');
const staffUserModel = require('../../models/staff_user');
const manageStaffValidate = require('../../validation/manage_staff_validation');
const validator = require('../../utils/validator');


exports.deleteStaff = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (manageStaffValidate.staffUserReq(reqData)) {

    try {
      const staffId = reqData.id;
      staffUserModel.findByIdAndRemove({ _id: staffId }, function (err) {
        if (err) {
          res.send({ "message": "unable to remove document by ID","status" : 500 });
          return
        }
        res.send({ "success": true,"status":200,"message": "Staff removed successfully" });
      })

    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }
};
