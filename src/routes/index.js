const express = require('express');

const sendEmailRoutes = require('./send.email.routes');

const routes = express.Router();

routes.use('/send-email', sendEmailRoutes);

module.exports = routes;
