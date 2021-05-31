const express = require('express');

import sendEmailRoutes from './send.email.routes';

const routes = express.Router();

routes.use('/send-email', sendEmailRoutes);

module.exports = routes;
