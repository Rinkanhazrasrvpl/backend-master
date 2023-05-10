const logger = require('../../config/logger');

module.exports.CheckSellerReq = (data) => {
    let errcounter = 0;
    if (data.sellerId === undefined || data.sellerId == null) {
        logger.info("seller Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.editsellerAddressReq = (data) => {
    let errcounter = 0;
    if (data.id === undefined || data.id == null) {
        logger.info("address Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.removeSellerAddressReq = (data) => {
    let errcounter = 0;
    if (data.id === undefined || data.id == null) {
        logger.info("address Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.sellerInfoReq = (data) => {
    let errcounter = 0;
    if (data.id === undefined || data.id == null) {
        logger.info("seller info Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

