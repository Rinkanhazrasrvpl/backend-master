const express = require('express');

const {addPermission} = require('../../controllers/user_permission/add_permisssion');

const {userPermissionList} = require('../../controllers/user_permission/permission_user_list');

const {editUserPermission} = require('../../controllers/user_permission/edit_user_permission');

const {removeUserPermission} = require('../../controllers/user_permission/remove_user_permission');

const router = express.Router();

router.post("/add-permission", addPermission);
router.get("/user-permission-list", userPermissionList);
router.post("/edit_user_permission",editUserPermission)
router.post("/remove_user_permission",removeUserPermission);


module.exports = router;
