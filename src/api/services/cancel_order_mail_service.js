const nodemailer = require("nodemailer");
const path = require('path');
const handlebars = require("handlebars");
const fs = require('fs');

var cancelOrderMail = 'rinkan538@gmail.com';

var transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",

    service: 'gmail',
    port: 465,
    secure: true, // true for 465, false for other ports
    // logger: true,
    // debug: true,
    secureConnection: false,
    auth: {
        user: 'rinkan538@gmail.com', // generated ethereal user
        pass: 'ykmvgeybeikqfwih', // generated ethereal password
    },
    tls: {
        rejectUnauthorized: true
    }
});


module.exports.cancelOrdermail = (data, toEmail) => {
    console.log("Call this function");
    const filePath = path.join(__dirname, '../mail_template/cancel_order_template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = data;
    const htmlToSend = template(replacements);
    return new Promise(async (resolve, reject) => {
        try {
            transporter.sendMail({
                from: cancelOrderMail, // sender address
                to: "rinkan973@gmail.com", // list of receivers
                subject: "Your 21Genx order has been cancelled", // Subject line
                text: '', // plain text body
                html: htmlToSend,
                headers: { 'x-myheader': 'test header' }
            });
            resolve(true);
        } catch (e) {
            console.log(e);
            resolve(false)
        }
    });
}



