'use strict';

var mongoose = require('mongoose');

const config = require('../config/env.config');

const logger = require('./logger.helper');

function gracefulExit() {

    mongoose.connection.close(function () {
        logger.info('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
    });
}

module.exports = function () {

    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

    //Set up default mongoose connection
    mongoose.connect(config.databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => {
        logger.info('Success! Database connected');
    }).catch(err => {
        logger.error('Database connection error');
        logger.error('Reason: ', err.message);
        process.exit();
    });
};
