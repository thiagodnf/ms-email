
const { APIError } = require('../errors/apiError.error');

exports.createErrorHandlerMiddleware = () => {

    return (error, req, res, next) => {

        if (error instanceof APIError) {
            return res.status(error.status).json({
                error: {
                    status: error.status,
                    type: error.type,
                    name: error.name,
                    message: req.polyglot.t(error.message),
                    errors: error.errors,
                },
            });
        }

        return res.status(500).json({
            error: {
                status: 500,
                type: 'InternalServerError',
                name: 'UnknownError',
                message: req.polyglot.t('InternalServerError'),
                errors: [{
                    message: error.message,
                }],
            },
        });
    };
};
