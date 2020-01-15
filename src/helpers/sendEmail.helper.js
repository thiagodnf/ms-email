'use strict';

// var mongoose = require('mongoose');

const nodemailer = require('nodemailer');

const config = require('../config/env.config');

module.exports = function (emailTo, email) {

    return new Promise(function(resolve, reject){

        let transport = nodemailer.createTransport({
            host: config.smtpHost,
            port: config.smtpPort,
            auth: {
                user: config.smtpAuthUser,
                pass: config.smtpAuthPassword
            }
        });

        const message = {
            from: config.smtpEmailFrom,     // Sender address
            to: emailTo,                    // List of recipients
            subject: email.subject,          // Subject line
            html: email.content
        };

        transport.sendMail(message, function (error, info) {

            if (error) return reject(error);

            return resolve(info);
        });
    });
};
