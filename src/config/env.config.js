'use strict';

module.exports = {

    appName: process.env.APP_NAME || "MS E-mail",
    appSupportName: process.env.APP_SUPPORT_NAME || "MS E-mail Team",
    appSupportEmail: process.env.APP_SUPPORT_EMAIL || "team@ms-email.com",

    "appEndpoint": "http://localhost:3001",
    "apiEndpoint": "http://localhost:3001",

    port: process.env.PORT || 3001,
    databaseUrl: process.env.DATABASE_URL || "",

    "jwtSecret": process.env.JWT_SECRET || "myS33!!creeeT",
    "jwtExpirationInSeconds": 36000,

    smtpHost: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    smtpPort: process.env.SMTP_PORT || 2525,
    smtpAuthUser: process.env.SMTP_AUTH_USER || '496718daab88c7',
    smtpAuthPassword: process.env.SMTP_AUTH_PASSWORD || '7e4fa041829f21',
    smtpEmailFrom: process.env.SMTP_EMAIL_FROM || 'no-reply@ms-email.com',
};
