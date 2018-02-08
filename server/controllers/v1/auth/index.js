import { Router } from 'express';
import passport from 'passport';

import User from './../../../models/user';
import { generateAccessToken, respond, authenticate, verifyAuth } from './../../../middleware/auth';

import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////

  api.get('/', authenticate, (req, res) => {
    req.logout();
    res.status(200).send('Succesfully logged out.');
  });

  ////////////////////////////////////////////////////////////
  //                      GET '/:id'                        //
  ////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', passport.authenticate(
    'local', {
      session: false,
      scope: []
    }), generateAccessToken, respond
  )
  ////////////////////////////////////////////////////////////
  //                      PUT '/:id'                        //
  ////////////////////////////////////////////////////////////


  return api;
}
