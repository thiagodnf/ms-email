'use strict';

const { check } = require('express-validator');

exports.confirmEmail = [
    check('email')
        .trim()
        .not().isEmpty().withMessage("requiredField")
        .normalizeEmail()
        .isEmail().withMessage('isEmail')
    ,
    check('confirmationUrl')
        .trim()
        .not().isEmpty().withMessage("requiredField")
        .isURL().withMessage('isURL')
    ,
]

exports.userActivated = [
    check('email')
        .trim()
        .not().isEmpty().withMessage("requiredField")
        .normalizeEmail()
        .isEmail().withMessage('isEmail')
    ,
    check('welcomeUrl')
        .trim()
        .not().isEmpty().withMessage("requiredField")
        .isURL().withMessage('isURL')
    ,
]
