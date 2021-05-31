const express = require('express');
const SendEmailController = require('../app/controllers/SendEmailController');

const sendEmailRoutes = express.Router();

sendEmailRoutes.post('/store', SendEmailController.store);

module.exports = sendEmailRoutes;
