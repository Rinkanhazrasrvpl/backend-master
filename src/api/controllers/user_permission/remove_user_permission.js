const logger = require('../../../config/logger');
const permissionModel = require('../../models/permission');
const permissionValidate = require('../../validation/permission_validation');
const validator = require('../../utils/validator');


exports.removeUserPermission = async (req, res, next) => {

    console.log("remove user permission api hit>>>>>");

  let reqData = validator.requestFilter(req.body);

  if (permissionValidate.CheckPermissionReqId(reqData)) {

    try {
      const permissionId = reqData.id;
      permissionModel.findByIdAndRemove({ _id: permissionId }, function (err) {
        if (err) {
          res.send({ "message": "unable to remove document by ID","status" : 500 });
          return
        }
        res.send({ "success": true,"status":200,"message": "Permission user removed successfully" });
      })

    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }
};
