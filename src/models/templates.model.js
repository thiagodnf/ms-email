'use strict';

const mongoose = require('mongoose');
const uniqueValidatorPlugin = require('mongoose-unique-validator');
const normalizePlugin = require('normalize-mongoose');

const Schema = mongoose.Schema;

let templatesSchema = new Schema({
    subject: {
        type: String,
        required: [true, `subjectRequiredField`],
        trim: true,
    },
    body: {
        type: String,
        required: [true, `bodyRequiredField`],
        trim: true,
    },
    type: {
        type: String,
        required: [true, `typeRequiredField`],
        trim: true,
    },
    locale: {
        type: String,
        required: [true, `localeRequiredField`],
        trim: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

// Plugins

templatesSchema.plugin(normalizePlugin);
templatesSchema.plugin(uniqueValidatorPlugin, {
    message: '{PATH}Unique'
});

module.exports = mongoose.model('templates', templatesSchema)
