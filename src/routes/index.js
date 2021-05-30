import { Router } from 'express';

import sendEmailRoutes from './send.email.routes';

const routes = Router();

routes.use('/send-email', sendEmailRoutes);

export default routes;
