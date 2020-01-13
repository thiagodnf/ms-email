'use strict';

module.exports = {

    "appName": process.env.APP_NAME || "MS Account",
    "appSupportMail": process.env.APP_SUPPORT_MAIL || "teste@teste.com",
    "appEndpoint": "http://localhost:3001",
    "apiEndpoint": "http://localhost:3001",

    "port": process.env.PORT || 3001,
    DATABASE_URL: process.env.DATABASE_URL || "",

    "jwtSecret": process.env.JWT_SECRET || "myS33!!creeeT",
    "jwtExpirationInSeconds": 36000,

    "smtpHost": process.env.SMTP_HOST || 'smtp.mailtrap.io',
    "smtpPort": process.env.SMTP_PORT || 2525,
    "smtpAuthUser": process.env.SMTP_AUTH_USER || '496718daab88c7',
    "smtpAuthPassword": process.env.SMTP_AUTH_PASSWORD || '7e4fa041829f21',
    "smtpEmailFrom": process.env.SMTP_EMAIL_FROM || 'elonmusk@tesla.com',

    TEMPLATE_TYPE: {
        NORMAL_USER: 1,
        ADMIN_USER: 2048
    }
};
