import express from 'express';
import accountController from '../controllers/account.controller';

const ROUTE = '/accounts';

const accountRoutes = express.Router();

accountRoutes.get(ROUTE, accountController.getAll);
accountRoutes.post(ROUTE, accountController.create);

export default accountRoutes;
