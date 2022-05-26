const nodemailer = require('nodemailer');

const { miAutenticacion } = require('./config.json')['development']

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: miAutenticacion
});
module.exports = transporter;