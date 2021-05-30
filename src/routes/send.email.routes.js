import { Router } from 'express';
import SendEmailController from '../app/controllers/SendEmailController';

const sendEmailRoutes = Router();

sendEmailRoutes.post('/store', SendEmailController.store);

export default sendEmailRoutes;
