const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const permissionModel = require('../../models/permission');
const permissionValidate = require('../../validation/permission_validation');
const validator = require('../../utils/validator');


exports.userPermissionList = async (req, res, next) => {

    try {
      
      const findQuery = permissionModel.find();
      findQuery.select('name createdAt');


      findQuery.exec(function (err, permissionUserList) {
        if (err) {
          res.send({ "message": "unable to find document","status" : 500, "success":false });
          return
        }
        res.send({ "success": true,"status":200,"response" : permissionUserList })
      });

    } catch (e) {
      return { "success": false, "status": 500, "message": 'Some error occurred', "response": null }
    }

};
