const express = require('express');
import SendEmailController from '../app/controllers/SendEmailController';

const sendEmailRoutes = express.Router();

sendEmailRoutes.post('/store', SendEmailController.store);

module.exports = sendEmailRoutes;
