'use strict';

var mongoose = require('mongoose');

const config = require('../config/env.config');

function gracefulExit() {

    mongoose.connection.close(function () {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
}


module.exports = function () {

    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

    //Set up default mongoose connection
    mongoose.connect(config.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => {
        console.log('Success! Database connected')
    }).catch(err => {
        console.log('Database connection error')
        process.exit();
    });
}
