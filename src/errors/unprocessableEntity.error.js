'use strict';

const { APIError } = require('./apiError.error');

class UnprocessableEntity extends APIError {

    constructor() {
        super(422, 'UnprocessableEntity');
    }
}

class ValidationError extends UnprocessableEntity {
}

exports.ValidationError = ValidationError;
