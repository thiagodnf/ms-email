
const mongoose = require('mongoose');
const uniqueValidatorPlugin = require('mongoose-unique-validator');
const normalizePlugin = require('normalize-mongoose');

const emailsSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, `requiredField`],
        trim: true,
    },
    body: {
        type: String,
        required: [true, `requiredField`],
        trim: true,
    },
    type: {
        type: String,
        required: [true, `requiredField`],
        trim: true,
    },
    locale: {
        type: String,
        required: [true, `requiredField`],
        trim: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});

// Plugins

emailsSchema.plugin(normalizePlugin);
emailsSchema.plugin(uniqueValidatorPlugin, {
    message: '{PATH}Unique',
});

module.exports = mongoose.model('templates', emailsSchema);
