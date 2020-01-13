'use strict';

const { APIError } = require("./apiError.error");

class NotFoundError extends APIError {

    constructor() {
        super(404, "NotFound");
    }
}

class PageNotFoundError extends NotFoundError {
}

exports.PageNotFoundError = PageNotFoundError;
