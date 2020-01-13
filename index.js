'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createLocaleMiddleware = require('express-locale');

const { createCorsMiddleware } = require('./src/middlewares/cors.middleware');
const { createI18nMiddleware } = require('./src/middlewares/i18n.middleware');
const { createErrorHandlerMiddleware } = require('./src/middlewares/error.middleware');

const  connectDB = require('./src/helpers/db.helper');

const { PageNotFoundError } = require('./src/errors/notFound.error');

connectDB();

// ExpressJS's Settings

app.use(createLocaleMiddleware({ "default": "en-US" }));
app.use(createI18nMiddleware());
app.use(createCorsMiddleware());
app.use(bodyParser.json());
app.use(express.json());

// Routes

app.use('/mails', require('./src/routes/mail.route'));
app.use('/templates', require('./src/routes/templates.route'));

// Return 404
app.get('*', (req, res, next) => {
    next(new PageNotFoundError())
})

// Error Handler
app.use(createErrorHandlerMiddleware());

// app.use(error.handler);
let config = {
    port: 3001
}

app.listen(config.port, function () {
    console.log(`App running on port ${config.port}`);
});
