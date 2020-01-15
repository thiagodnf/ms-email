'use strict';

const { check } = require('express-validator');

exports.confirmEmail = [
    check('email')
        .trim()
        .not().isEmpty().withMessage("emailRequiredField")
        .normalizeEmail()
        .isEmail().withMessage('emailIsEmail')
    ,
    check('confirmationUrl')
        .trim()
        .not().isEmpty().withMessage("confirmationUrlRequiredField")
        .isURL().withMessage('confirmationUrlIsURL')
    ,
]
