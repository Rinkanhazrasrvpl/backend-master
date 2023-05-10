const express = require('express');

const {getOrderList} = require('../../controllers/order/get-order-list');
const {orderCancel} = require('../../controllers/order/order-cancel');
const {cancelOrderDtl} = require('../../controllers/order/get-cancel-order-dtl');
const {returnOrder} = require('../../controllers/order/return-order');
const {getReturnDtl} = require('../../controllers/order/get-return-order-dtl')
const {orderPlaced} = require('../../controllers/order/order-placed');


const router = express.Router();

router.post("/get-order-list", getOrderList);
router.post("/order-cancel",orderCancel);
router.post("/get-cancel-order-dtl",cancelOrderDtl);
router.post("/return-order",returnOrder)
router.post("/get-return-order-dtl",getReturnDtl);
router.post("/order-placed",orderPlaced);

module.exports = router;
