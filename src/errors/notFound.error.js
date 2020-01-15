'use strict';

const { APIError } = require("./apiError.error");

class NotFoundError extends APIError {

    constructor() {
        super(404, "NotFound");
    }
}

class PageNotFoundError extends NotFoundError {
}

class ContentNotFoundError extends NotFoundError {
}

class LanguageNotFoundError extends NotFoundError {
}

exports.PageNotFoundError = PageNotFoundError;
exports.ContentNotFoundError = ContentNotFoundError;
exports.LanguageNotFoundError = LanguageNotFoundError;
