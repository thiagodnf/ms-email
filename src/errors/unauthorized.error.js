'use strict';

const { APIError } = require('./apiError.error');

class UnauthorizedError extends APIError {

    constructor() {
        super(401, 'UnauthorizedError');
    }
}

class MissingAuthorizationError extends UnauthorizedError {
}

class MissingBearerError extends UnauthorizedError {
}

class InvalidTokenError extends UnauthorizedError {
}

exports.MissingAuthorizationError = MissingAuthorizationError;
exports.MissingBearerError = MissingBearerError;
exports.InvalidTokenError = InvalidTokenError;
