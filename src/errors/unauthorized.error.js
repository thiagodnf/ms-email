'use strict';

const { APIError } = require('./apiError.error');

class UnauthorizedError extends APIError {

    constructor() {
        super(401, 'UnauthorizedError');
    }
}

/**
 * @apiDefine MissingAuthorizationError
 * @apiError {UnauthorizedError} MissingAuthorizationError Missing authorization header
 * @apiErrorExample MissingAuthorizationError
 * HTTP/1.1 401 Unauthorized
 * {
 *     "error": {
 *         "status": 401,
 *         "type": "UnauthorizedError",
 *         "name": "MissingAuthorizationError",
 *         "message": "Missing authorization header",
 *         "errors": []
 *     }
 * }
 **/
class MissingAuthorizationError extends UnauthorizedError {
}

/**
 * @apiDefine MissingBearerError
 * @apiError {UnauthorizedError} MissingBearerError Missing bearer
 * @apiErrorExample MissingBearerError
 * HTTP/1.1 401 Unauthorized
 * {
 *     "error": {
 *         "status": 401,
 *         "type": "UnauthorizedError",
 *         "name": "MissingBearerError",
 *         "message": "Missing bearer",
 *         "errors": []
 *     }
 * }
 **/
class MissingBearerError extends UnauthorizedError {
}

/**
 * @apiDefine InvalidTokenError
 * @apiError {UnauthorizedError} InvalidTokenError Invalid token
 * @apiErrorExample InvalidTokenError
 * HTTP/1.1 401 Unauthorized
 * {
 *     "error": {
 *         "status": 401,
 *         "type": "UnauthorizedError",
 *         "name": "InvalidTokenError",
 *         "message": "Invalid token",
 *         "errors": []
 *     }
 * }
 **/
class InvalidTokenError extends UnauthorizedError {
}

exports.MissingAuthorizationError = MissingAuthorizationError;
exports.MissingBearerError = MissingBearerError;
exports.InvalidTokenError = InvalidTokenError;
