const express = require('express');

const {addStaff} = require('../../controllers/manage_staff/staff_manage');


const router = express.Router();

router.post("/add-staff-user", addStaff);



module.exports = router;
