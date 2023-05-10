const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const permissionModel = require('../../models/permission');
const permissionValidate = require('../../validation/permission_validation');
const validator = require('../../utils/validator');

exports.editUserPermission = async (req, res, next) => {

    console.log("Edit permission api hit>>>>>>>>>");

    let reqData = validator.requestFilter(req.body);

    if (permissionValidate.CheckPermissionReqId(reqData)) {

        try {
            let permissionData = new permissionModel(reqData);

            // permissionModel.findOne({$and : [{ name: reqData.name  },{ _id: reqData.id }]}, function (err, user) {

                if (user) {
                    const permissionId = reqData.id;
                    const query = { _id: permissionId };
                    const permissionInfo = reqData;
                    permissionModel.findOneAndUpdate(query, permissionInfo, function (err, data) {
                        if (!data) {
                            res.send({ "message": "No records found", "status": 400 });
                            return
                        }
                        if (err) {
                            res.send({ "success": false, "status": 500, "message": "Unable to update address" });
                            return
                        }
                        res.send({ "success": true, "status": 200, "message": "User permission updated successfully" });
                    });

                } else {
                    res.send({ "success": false, "status": 200, "message": "This user already exist." });

                }

            // });

        } catch (e) {
            return { success: false, status: 500, message: 'Some error occurred', response: null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }

};
