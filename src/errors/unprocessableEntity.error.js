'use strict';

const { APIError } = require('./apiError.error');

class UnprocessableEntity extends APIError {

    constructor() {
        super(422, 'UnprocessableEntity');
    }
}

/**
 * @apiDefine ValidationError
 * @apiError {UnprocessableEntity} ValidationError Validation Failed
 * @apiErrorExample ValidationError
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": {
 *         "status": 422,
 *         "type": "UnprocessableEntity",
 *         "name": "ValidationError",
 *         "message": "Validation Failed",
 *         "errors": [{
 *             "field": "email",
 *             "message": "This is a required field"
 *         }]
 *     }
 * }
 **/
class ValidationError extends UnprocessableEntity {
}

exports.ValidationError = ValidationError;
