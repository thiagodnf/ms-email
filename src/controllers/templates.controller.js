'use strict';

const TemplateModel = require('../models/templates.model');

const confirmEmailData = require("../../initial-data/confirmEmail.js");

exports.reset = (req, res, next) => {

    // clear all existing documents from the collections
    TemplateModel.remove();

    TemplateModel.deleteMany({}).then((savedTemplate) => {

    }).catch(next);

    TemplateModel.insertMany(confirmEmailData).then((savedTemplates) => {
        res.status(200).json({
            data: savedTemplates
        });
    }).catch(next);
}

exports.findAll = (req, res, next) => {

    let page = req.query.page || 1;
    let perPage = req.query.perPage || 10;
    let order = req.query.order || "asc";
    let orderBy = req.query.orderBy || "subject";

    page -= 1;

    TemplateModel.find()
        .limit(perPage)
        .skip(perPage * page)
        .sort({
            [orderBy]: order
        })
        .exec(function (error, templates) {

            if (error) return next(error);

            res.status(200).json({
                data: templates
            });
        });
}
