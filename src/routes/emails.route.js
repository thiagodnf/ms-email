'use strict';

const express = require('express');
const router = express.Router();

// Midlewares
const EmailsController = require('../controllers/emails.controller');
const ValidatorMiddleware = require('../middlewares/validator.middleware');
const TokenMiddleware = require('../middlewares/token.middleware');

// Validators
const EmailsValidator = require('../validators/emails.validator');

// Routes
router.get('/:template/view', [
    TokenMiddleware.validToken,
    EmailsController.view
]);

router.post('/confirm-email/send', [
    ValidatorMiddleware.validate(EmailsValidator.confirmEmail),
    TokenMiddleware.validToken,
    EmailsController.confirmEmail
]);

router.post('/user-activated/send', [
    ValidatorMiddleware.validate(EmailsValidator.userActivated),
    TokenMiddleware.validToken,
    EmailsController.userActivated
]);

module.exports = router;
