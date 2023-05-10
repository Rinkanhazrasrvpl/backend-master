const logger = require('../../config/logger');

module.exports.CheckPermissionReq = (data) => {
    let errcounter = 0;
    if (data.name === undefined || data.name == null) {
        logger.info("Name is missing");
        errcounter++;
    }
    return errcounter <= 0;
}

module.exports.CheckPermissionReqId = (data) => {
    let errcounter = 0;
    if (data.id === undefined || data.id == null) {
        logger.info("Permission Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}