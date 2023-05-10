const express = require('express');

const {addStaff} = require('../../controllers/manage_staff/staff_manage');
const {getStaffList} = require('../../controllers/manage_staff/get_staff_list');
const {deleteStaff} = require('../../controllers/manage_staff/delete_staff');
const {editStaff} = require('../../controllers/manage_staff/edit_staff');
const {getStaffDetails} = require('../../controllers/manage_staff/get_staff_details');


const router = express.Router();

router.post("/add-staff-user", addStaff);
router.post("/get-staff-list",getStaffList);
router.post("/delete-staff",deleteStaff);
router.post("/edit-staff",editStaff);
router.post("/get_staff_details",getStaffDetails);



module.exports = router;
