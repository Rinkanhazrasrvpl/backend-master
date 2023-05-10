const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const staffUserModel = require('../../models/staff_user');
const manageStaffValidate = require('../../validation/manage_staff_validation');
const validator = require('../../utils/validator');


exports.getStaffDetails = async (req, res, next) => {

    console.log("Get staff details API hit")

    let reqData = validator.requestFilter(req.body);

    if (manageStaffValidate.staffUserReq(reqData)) {

        try {
            const staffId = reqData.id;

            //   const findQuery = staffUserModel.aggregate([
            //     { $match: { _id: ObjectId('645b2994b9f0103b400d4693') } },
            //     { $lookup: {
            //         from: "user_permissions",
            //         localField: "_id",
            //         foreignField: "roleId",
            //         as: "staffDetails"
            //       }
            //     },
            //     {
            //         $addFields: {
            //           role_name: { $arrayElemAt: ["$staffDetails.name", 0] }
            //         }
            //       },
            //       {
            //         $project: {
            //           _id: 1,
            //           email: 1,
            //           total: 1,
            //           phone: 1,
            //           role_name: 1,


            //         },
            //     }

            //   ]);
            console.log("11111111111111");

            const findQuery = staffUserModel.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [
                                { $toString: '$_id' },
                                staffId

                            ]
                        }
                    }
                },
                {
                    $lookup: {
                        from: "user_permissions",
                        localField: "id",
                        foreignField: "roleId",
                        as: "staffDetails"
                    },

                },
                {
                    $addFields: {
                        role_name: { $arrayElemAt: ["$staffDetails.name", 0] }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        email: 1,
                        total: 1,
                        phone: 1,
                        role_name: 1,

                    },

                }

            ]);

            console.log("2222222222222");

            findQuery.exec(function (err, staffDtl) {
                if (err) {
                    res.send({ "message": "unable to find document", "status": 500, "success": false });
                    return
                }
                res.send({ "success": true, "status": 200, "response": staffDtl })
            });

        } catch (e) {
            return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }

};
