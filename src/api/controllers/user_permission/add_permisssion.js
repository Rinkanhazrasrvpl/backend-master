const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const permissionModel = require('../../models/permission');
const permissionValidate = require('../../validation/permission_validation');
const validator = require('../../utils/validator');

exports.addPermission = async (req, res, next) => {

    let reqData = validator.requestFilter(req.body);

    if (permissionValidate.CheckPermissionReq(reqData)) {

        try {
            let permissionData = new permissionModel(reqData);

            permissionModel.findOne({ name: reqData.name }, function (err, user) {

                if(!user){
                    permissionData.save(function (err) {
                        if (err) {
                            res.send({ "status": 500, "message": "unable to insert document" });
                            return
                        }
                        res.send({ "success": true, "status": 200, "message": "User permission added successfully" });
                    });

                }else{
                    res.send({ "success": false, "status": 200, "message": "This user already exist."});

                }

            });

        } catch (e) {
            return { success: false, status: 500, message: 'Some error occurred', response: null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }

};
