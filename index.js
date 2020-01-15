'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createLocaleMiddleware = require('express-locale');
const morgan = require('morgan');
const listEndpoints = require('express-list-endpoints');

const config = require("./src/config/env.config");

const { createCorsMiddleware } = require('./src/middlewares/cors.middleware');
const { createI18nMiddleware } = require('./src/middlewares/i18n.middleware');
const { createErrorHandlerMiddleware } = require('./src/middlewares/error.middleware');

const connectDB = require('./src/helpers/db.helper');
const logger = require("./src/helpers/logger.helper");

const { PageNotFoundError } = require('./src/errors/notFound.error');

connectDB();

// ExpressJS's Settings
app.use(morgan('dev', { stream: logger.stream() }));
app.use(createLocaleMiddleware({ "default": "en-US" }));
app.use(createI18nMiddleware());
app.use(createCorsMiddleware());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/emails', require('./src/routes/emails.route'));

// Return 404
app.get('*', (req, res, next) => {
    next(new PageNotFoundError())
})

// Error Handler
app.use(createErrorHandlerMiddleware());

app.listen(config.port, function () {

    logger.info(`App running on port ${config.port}`);
    logger.info(`Endpoints:`);

    listEndpoints(app).forEach((endPoint) => {

        endPoint.methods.forEach((method) => {
            logger.info(`${method}`, endPoint.path);
        });
    });
});
