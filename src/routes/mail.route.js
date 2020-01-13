'use strict';

const express = require('express');
const router = express.Router();

const TemplatesController = require('../controllers/templates.controller');

router.get('/', [
    TemplatesController.findAll
]);

module.exports = router;
