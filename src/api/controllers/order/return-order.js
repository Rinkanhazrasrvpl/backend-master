const mongoose = require('mongoose');
const logger = require('../../../config/logger');
const ordeReturnModel = require('../../models/return_order');
const orderReturnValidate = require('../../validation/order_validation');
const validator = require('../../utils/validator');
const mailSender = require('../../services/return_order_mail_service');

exports.returnOrder = async (req, res, next) => {

    console.log("hit order return api");
    const name = "Rinkan Hazra";
    const orderId = "405-132424-242345";
    const pickUpDate = "Wednesday,May 05,23"
    const productName = "Boat headphones"
    const imageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80%22";

    const mailData = {
        "firstName": name,
        "orderId": orderId,
        "pickUpDate": pickUpDate,
        "productName": productName,
        "imageUrl" : imageUrl


    }

    const mailresult = await mailSender.returnOrdermail(mailData, "rinkan973@gmail.com");

    if(mailresult == true){
      console.log("mail sended successfully");
    }else{
      console.log("Mail not sended");
    }

  let reqData = validator.requestFilter(req.body);

  if (orderReturnValidate.orderReturnCancelReq(reqData)) {

    try {
      let returnOrderData = new ordeReturnModel(reqData);

      returnOrderData.save(function (err) {
        if (err) {
          res.send({"status" : 500, "message": "unable to insert document" });
          return
        }
        res.send({ "success": true,"status": 200 ,"message" : "Order return request send successfully"});
      });


    } catch (e) {
      return { success: false, status: 500, message: 'Some error occurred', response: null }
    }
  } else {
    res.json({ success: false, status: 1001, message: "Parameter missing", response: null });
  }

};
