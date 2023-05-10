const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const staffUserModel = require('../../models/staff_user');
const manageStaffValidate = require('../../validation/manage_staff_validation');
const validator = require('../../utils/validator');


exports.getStaffList = async (req, res, next) => {

  let reqData = validator.requestFilter(req.body);

  if (manageStaffValidate.CheckStaffListReq(reqData)) {

    try {
      const total_count = await staffUserModel.countDocuments();

      let limit = reqData['limit'];
      let skip = reqData['skip'];

      if (reqData['limit'] == 0) {
        limit = 2;
      }

      const findQuery = staffUserModel.aggregate([
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

        },
      ]).skip(Number(skip)).limit(Number(limit));

      findQuery.exec(function (err, staffList) {
        if (err) {
          res.send({ "message": "unable to find document", "status": 500, "success": false });
          return
        }
        res.send({ "success": true, "status": 200, "response": staffList, total_count })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};
