/* eslint-disable no-console */

import 'reflect-metadata';
import dotenv from 'dotenv';
import Container from 'typedi';
import { Api } from './api';

dotenv.config();

try {
  const api = Container.get(Api);
  api.initRouter();

  const apiPort = process.env.PORT;
  if (!apiPort) throw new Error('PORT is not provided');

  api.app.listen(Number(apiPort));
  console.log('INFO Api started on port', apiPort);
} catch (error) {
  console.error('ERROR', (<{ message: string }>error).message);
}
