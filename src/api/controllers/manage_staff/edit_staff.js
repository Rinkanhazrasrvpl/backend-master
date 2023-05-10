const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const staffUserModel = require('../../models/staff_user');
const manageStaffValidate = require('../../validation/manage_staff_validation');
const validator = require('../../utils/validator');
const bcrypt = require('bcrypt');

exports.editStaff = async (req, res, next) => {

    let reqData = validator.requestFilter(req.body);

    if (manageStaffValidate.staffUserReq(reqData)) {

        try {
            const staffId = reqData.id;
            const query = { _id: staffId };
            const staffInfo = reqData;

            if (staffInfo.password === undefined || staffInfo.password == null || staffInfo.password == "") {

                delete staffInfo.password;
                staffUserModel.findOneAndUpdate(query, staffInfo, function (err, data) {
                    if (!data) {
                        res.send({ "message": "No records found", "status": 400 });
                        return
                    }
                    if (err) {
                        res.send({ "status": 500, "message": "unable to update address" });
                        return
                    }
                    res.send({ "success": true, "status": 200, "message": "Staff updated successfully" });
                });

            } else {
                const saltRounds = 10;
                bcrypt.hash(staffInfo['password'], saltRounds, function (err, hash) {
                    if (err) {
                        // Handle error
                        console.log("error", err);
                    } else {
                        staffInfo['password'] = hash;
                        staffUserModel.findOneAndUpdate(query, staffInfo, function (err, data) {
                            if (!data) {
                                res.send({ "message": "No records found", "status": 400 });
                                return
                            }
                            if (err) {
                                res.send({ "status": 500, "message": "unable to update address" });
                                return
                            }
                            res.send({ "success": true, "status": 200, "message": "Staff updated successfully" });
                        });
            
                    }
                });

            }

        } catch (e) {
            return { success: false, status: 500, message: 'Some error occurred', response: null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }
};

