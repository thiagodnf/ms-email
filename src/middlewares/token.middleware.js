'use strict';

const config = require("../config/env.config");

const { MissingAuthorizationError, MissingBearerError, InvalidTokenError} = require('../errors/unauthorized.error');

exports.validToken = (req, res, next) => {

    let authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return next(new MissingAuthorizationError());
    }

    let authorization = authorizationHeader.split(' ');

    if (authorization[0] !== 'Bearer') {
        return next(new MissingBearerError());
    }

    if (authorization[1] !== config.apiToken){
        return next(new InvalidTokenError());
    }

    return next();
}
