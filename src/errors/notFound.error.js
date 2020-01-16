
const { APIError } = require('./apiError.error');

class NotFoundError extends APIError {

    constructor() {
        super(404, 'NotFound');
    }

}

class PageNotFoundError extends NotFoundError {
}

/**
 * @apiDefine ContentNotFoundError
 * @apiError {NotFound} ContentNotFoundError Content not found
 * @apiErrorExample ContentNotFoundError
 * HTTP/1.1 404 Not Found
 * {
 *     "error": {
 *         "status": 422,
 *         "type": "UnprocessableEntity",
 *         "name": "ContentNotFoundError",
 *         "message": "Content not found",
 *         "errors": []
 *     }
 * }
 **/
class ContentNotFoundError extends NotFoundError {
}

/**
 * @apiDefine LanguageNotFoundError
 * @apiError {NotFound} LanguageNotFoundError Language not found
 * @apiErrorExample LanguageNotFoundError
 * HTTP/1.1 404 Not Found
 * {
 *     "error": {
 *         "status": 422,
 *         "type": "UnprocessableEntity",
 *         "name": "LanguageNotFoundError",
 *         "message": "Language not found",
 *         "errors": []
 *     }
 * }
 **/
class LanguageNotFoundError extends NotFoundError {
}

exports.PageNotFoundError = PageNotFoundError;
exports.ContentNotFoundError = ContentNotFoundError;
exports.LanguageNotFoundError = LanguageNotFoundError;
