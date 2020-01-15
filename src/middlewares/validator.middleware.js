'use strict';

const { validationResult } = require('express-validator');

const { ValidationError } = require('../errors/unprocessableEntity.error');

exports.validate = (validations) => {

    return async (req, res, next) => {

        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next();
        }

        let error = new ValidationError();

        errors.array().forEach((e) => {

            error.errors.push({
                "field": e.param,
                "message": req.polyglot.t(e.msg)
            });
        });

        return next(error);
    };
}
