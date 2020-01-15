
const { validationResult } = require('express-validator');

const { ValidationError } = require('../errors/unprocessableEntity.error');

exports.validate = (validations) => async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const validationError = new ValidationError();

    errors.array().forEach((e) => {

        validationError.errors.push({
            field: e.param,
            message: req.polyglot.t(e.msg),
        });
    });

    return next(validationError);
};
