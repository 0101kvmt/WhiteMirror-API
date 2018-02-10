import express from 'express';
import middleware from './../middleware';
import initializeDb from '../config/db';

import mirror from '../controllers/v1/mirror';
import weather from '../controllers/v1/mirror/weather';
import option from '../controllers/v1/option';
import section from '../controllers/v1/section';
import toDo from '../controllers/v1/toDo';
import user from '../controllers/v1/user';
import auth from '../controllers/v1/auth';

let router = express();

initializeDb(db => {

  //Internal middleware
  router.use(middleware({ db }));

  router.use('/mirror', mirror({db}));
  router.use('/mirror/weather', weather({db}));
  router.use('/option', option({db}));
  router.use('/section', section({db}));
  router.use('/user', user({db}));
  router.use('/auth', auth({db}));
  router.use('/toDo', toDo({db}));
});

export default router;
