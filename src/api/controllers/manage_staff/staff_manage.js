const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const staffUserModel = require('../../models/staff_user');
const manageStaffValidate = require('../../validation/manage_staff_validation');
const validator = require('../../utils/validator');
const bcrypt = require('bcrypt');

exports.addStaff = async (req, res, next) => {

    console.log('Add staff api>>>>>>>>>>');

    let reqData = validator.requestFilter(req.body);

    if (manageStaffValidate.checkAddStaffManageReq(reqData)) {

        try {
            let staffData = new staffUserModel(reqData);

            staffUserModel.findOne({ email: reqData.email }, function (err, user) {

                if (!user) {
                    const saltRounds = 10;

                    const newPassword = reqData['password'];

                    console.log("password1111>>>>>>>", newPassword);

                    bcrypt.hash(newPassword, saltRounds, function (err, hash) {
                        if (err) {
                            // Handle error
                        } else {

                            reqData['password'] = hash;
                            console.log("newPassword222>>>>>>>>>", reqData);
                            staffData.save(function (err) {
                                if (err) {
                                    res.send({ "status": 500, "message": "unable to insert document" });
                                    return
                                }
                                res.send({ "success": true, "status": 200, "message": "Staff added successfully" });
                            });

                        }
                    });




                } else {
                    res.send({ "success": false, "status": 200, "message": "This email already exist." });

                }

            });

        } catch (e) {
            return { success: false, status: 500, message: 'Some error occurred', response: null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }

};
