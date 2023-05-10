const logger = require('../../config/logger');

module.exports.orderReq = (data) => {
    let errcounter = 0;
    if (data.userId === undefined || data.userId == null) {
        logger.info("User Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.orderReturnCancelReq = (data) => {
    let errcounter = 0;
    if (data.userId === undefined || data.userId == null) {
        logger.info("User Id is missing");
        errcounter++;
    }
    if (data.orderId === undefined || data.orderId == null) {
        logger.info("Order Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.cancelOrderReq = (data) => {
    let errcounter = 0;
    if (data.orderId === undefined || data.orderId == null) {
        logger.info("Order Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.returnOrderDtlReq = (data) => {
    let errcounter = 0;
    if (data.id === undefined || data.id == null) {
        logger.info("Return Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

