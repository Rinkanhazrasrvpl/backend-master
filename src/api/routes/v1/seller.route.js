const express = require('express');

const {addSellerAddress} = require('../../controllers/seller/add-seller-address');
const {editSellerAddress} = require('../../controllers/seller/edit-seller-address');
const {removeSellerAddress} = require('../../controllers/seller/remove_seller_address');
const {getSellerAddressList} = require('../../controllers/seller/get-seller-address-list');
const {getSellerInfo} = require('../../controllers/seller/get-seller-info');
const {selectSellerAddress} = require('../../controllers/seller/select_seller_address');
const {editStorDtl} = require('../../controllers/seller/edit-store-dtl');
const {editCusServiceDtl} = require('../../controllers/seller/edit-customer-service-dtl');


const router = express.Router();

router.post("/add-seller-address", addSellerAddress);
router.post("/edit-seller-address", editSellerAddress);
router.post("/remove-seller-address", removeSellerAddress);
router.post("/get-seller-address-list",getSellerAddressList);
router.post("/select_seller_address",selectSellerAddress);
router.post("/get-seller-info",getSellerInfo);
router.post("/edit-store-dtl",editStorDtl);
router.post("/edit-cus-service-dtl",editCusServiceDtl);

module.exports = router;
