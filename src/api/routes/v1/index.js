const express = require('express');
const userRoutes = require('./user.route');
const handleS3 = require('./s3Handle.route');
const handleCrms = require('./bsCrm.route');
const handleSeller = require('./seller.route');
const handleOrder = require('../../routes/v1/order.route');

const handlePermission = require('../../routes/v1/permission.route');

const manageStaff = require('../../routes/v1/manage_staf.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/users', userRoutes);

router.use('/s3', handleS3);

router.use('/crm', handleCrms);

router.use('/seller', handleSeller);

router.use('/order',handleOrder);

router.use('/permission',handlePermission);

router.use('/manage-staff',manageStaff)

module.exports = router;
