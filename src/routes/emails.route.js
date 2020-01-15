'use strict';

const express = require('express');
const router = express.Router();

// Midlewares
const EmailsController = require('../controllers/emails.controller');
const ValidatorMiddleware = require('../middlewares/validator.middleware');

// Validators
const EmailsValidator = require('../validators/emails.validator');

router.get('/:type/view', [
    EmailsController.view
]);

router.post('/confirm-email/send', [
    ValidatorMiddleware.validate(EmailsValidator.confirmEmail),
    EmailsController.confirmEmail
]);

module.exports = router;
