import express from 'express';
import initializeDb from '../config/db';

let router = express();

initializeDb(db => {
  router.get('/', (req, res) => res.send('test 1'));
});

export default router;
