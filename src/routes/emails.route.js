
const express = require('express');

// Midlewares
const EmailsController = require('../controllers/emails.controller');
const ValidatorMiddleware = require('../middlewares/validator.middleware');
const TokenMiddleware = require('../middlewares/token.middleware');

// Validators
const EmailsValidator = require('../validators/emails.validator');

const router = express.Router();

// Routes
router.get('/:template/view', [
    TokenMiddleware.validToken,
    EmailsController.view,
]);

/**
 * @api {post} /emails/confirm-email/send Send a confirmation email
 * @apiVersion 1.0.0
 * @apiName confirmEmail
 * @apiGroup Emails
 * @apiPermission none
 *
 * @apiUse ValidationError
 * @apiUse ContentNotFoundError
 * @apiUse LanguageNotFoundError
 * @apiUse MissingAuthorizationError
 * @apiUse MissingBearerError
 * @apiUse InvalidTokenError
 *
 * @apiParam (Body Parameters) {string} email The email from target user
 * @apiParam (Body Parameters) {string} confirmationUrl  The link to confirm the email
 * @apiParamExample {json} Example Request
 * {
 *      "email": "james@smith.com",
 *      "confirmationUrl": "https://www.google.com/confirm-email?token",
 * }
 * @apiSuccess {string} message A success message
 * @apiSuccess {object} data The account created
 * */
router.post('/confirm-email/send', [
    ValidatorMiddleware.validate(EmailsValidator.confirmEmail),
    TokenMiddleware.validToken,
    EmailsController.confirmEmail,
]);

router.post('/user-activated/send', [
    ValidatorMiddleware.validate(EmailsValidator.userActivated),
    TokenMiddleware.validToken,
    EmailsController.userActivated,
]);

module.exports = router;
