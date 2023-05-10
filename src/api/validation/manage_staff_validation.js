const logger = require('../../config/logger');

module.exports.checkAddStaffManageReq = (data) => {
    let errcounter = 0;
    if (data.name === undefined || data.name == null) {
        logger.info("Name is missing");
        errcounter++;
    }
    if (data.email === undefined || data.email == null) {
        logger.info("Email is missing");
        errcounter++;
    }
    if (data.phone === undefined || data.phone == null) {
        logger.info("Phone is missing");
        errcounter++;
    }
    if (data.phone === undefined || data.phone == null) {
        logger.info("Phone is missing");
        errcounter++;
    }
    if (data.roleId === undefined || data.roleId == null) {
        logger.info("Role Id is missing");
        errcounter++;
    }
    if (data.password === undefined || data.password == null) {
        logger.info("password Id is missing");
        errcounter++;
    }
    return errcounter <= 0;
}