import express from 'express';
import middleware from './../middleware';
import initializeDb from '../config/db';

import mirror from '../controllers/v1/mirror';
import option from '../controllers/v1/option';
import section from '../controllers/v1/section';
import user from '../controllers/v1/user';

let router = express();

initializeDb(db => {

  //Internal middleware
  router.use(middleware({ db }));

  router.use('/mirror', mirror({db}));
  router.use('/option', option({db}));
  router.use('/section', section({db}));
  router.use('/user', user({db}));
});

export default router;
