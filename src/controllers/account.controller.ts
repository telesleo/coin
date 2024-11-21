import { Request, Response } from 'express';
import accountsService from '../services/accounts.service';

function getAll(_req: Request, res: Response) {
  res.json(accountsService.getAll());
}

function create(req: Request, res: Response) {
  const { accountName } = req.body;
  accountsService.create(accountName);
  res.status(201).send(`Account ${accountName} created.`);
}

export default { getAll, create };
