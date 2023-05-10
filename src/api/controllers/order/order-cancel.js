const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const ordeCancelModel = require('../../models/order_cancel');
const orderCancelValidate = require('../../validation/order_validation');
const validator = require('../../utils/validator');

const mailSender = require('../../services/cancel_order_mail_service');

exports.orderCancel = async (req, res, next) => {

    console.log("hit order cancel api");
    const name = "Rinkan Hazra";
    const orderId = "405-132424-242345";
    const orderplaceDate = "Wednesday,May 05,23"
    const productName = "Boat headphones"

    const mailData = {
        "name": name,
        "orderId": orderId,
        "orderplaceDate": orderplaceDate,
        "productName": productName


    }

    const mailresult = await mailSender.cancelOrdermail(mailData, "rinkan973@gmail.com");

    if(mailresult == true){
        logger.info("Mail send successfully");
    }
    else{
        logger.info("No mail send.");

    }

    let reqData = validator.requestFilter(req.body);

    if (orderCancelValidate.orderReturnCancelReq(reqData)) {

        try {
            let cancelOrderData = new ordeCancelModel(reqData);

            cancelOrderData.save(function (err) {
                if (err) {
                    res.send({ "status": 500, "message": "unable to insert document" });
                    return
                }
                res.send({ "success": true, "status": 200, "message": "Cancel request send successfully" });
            });


        } catch (e) {
            return { success: false, status: 500, message: 'Some error occurred', response: null }
        }
    } else {
        res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
    }

};
