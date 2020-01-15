'use strict';

const Polyglot  = require('node-polyglot');

const availableLanguages = {
    'en-US': require('../locales/locale.en-US'),
    'pt-BR': require('../locales/locale.pt-BR')
};

exports.createI18nMiddleware = () => {

    return (req, res, next) => {

        // Get the locale from express-locale
        const locale = req.locale.toString();

        // Start Polyglot and add it to the req
        req.polyglot = new Polyglot();

        const messages = availableLanguages[locale] || availableLanguages['en-US'];

        req.polyglot.extend(messages);

        next();
    };
};
