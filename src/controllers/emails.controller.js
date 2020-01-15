'use strict';

const pug = require('pug');

const config = require("../config/env.config");
const sendEmail = require("../helpers/sendEmail.helper");

const { ContentNotFoundError, LanguageNotFoundError } = require("../errors/notFound.error")

const compiledTheme = pug.compileFile('./src/emails/themes/default/theme.pug');

const availableContents = {
    "confirm-email": {
        "en-US": pug.compileFile('./src/emails/templates/confirm-email/confirm-email.en-US.pug'),
        "pt-BR": pug.compileFile('./src/emails/templates/confirm-email/confirm-email.pt-BR.pug')
    },
    "user-activated": {
        "en-US": pug.compileFile('./src/emails/templates/user-activated/user-activated.en-US.pug'),
        "pt-BR": pug.compileFile('./src/emails/templates/user-activated/user-activated.pt-BR.pug'),
    }
}

function getEmail(content, language = "en-US", locals) {

    if (!availableContents[content]) {
        throw new ContentNotFoundError();
    }

    if (!availableContents[content][language]) {
        throw new LanguageNotFoundError();;
    }

    const compiledContent = availableContents[content][language];

    locals.appName = config.appName;
    locals.appSupportName = config.appSupportName;
    locals.appSupportEmail = config.appSupportEmail;

    const html = compiledTheme({
        appName: config.appName,
        content: compiledContent(locals)
    });

    return html;
}

exports.view = (req, res, next) => {

    const html = getEmail(req.params.template, req.locale.toString(), {

    });

    res.set('Content-Type', 'text/html');

    res.status(200).send(html);
}

exports.confirmEmail = (req, res, next) => {

    const html = getEmail("confirm-email", req.locale.toString(), {
        email: req.body.email,
        confirmationUrl: req.body.confirmationUrl,
    });

    sendEmail(req.body.email, {
        subject: req.polyglot.t("subjectConfirmEmail"),
        content: html
    }).then((info) => {
        res.status(200).send(info);
    }).catch((error) => {
        return next(error);
    });
}

exports.userActivated = (req, res, next) => {

    const html = getEmail("user-activated", req.locale.toString(), {
        email: req.body.email,
        welcomeUrl: req.body.welcomeUrl,
    });

    sendEmail(req.body.email, {
        subject: req.polyglot.t("subjectUserActivated"),
        content: html
    }).then((info) => {
        res.status(200).send(info);
    }).catch((error) => {
        return next(error);
    });
}
