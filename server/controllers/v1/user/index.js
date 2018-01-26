import { Router } from 'express';
import passport from 'passport';

import User from './../../../models/user';
import { generateAccessToken } from './../../../middleware/user';
import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////

  api.get('/', (req, res) => {
    User.find({}, (err, users) => {
      let userMap = {};

      console.log('users', users);

      users.forEach((user) => {
        userMap[user._id] = user;
      });
      res.status(200).send(defaultResponseModel(true, 'User has been succesfully found.', {user: userMap}))
    })
  });

  ////////////////////////////////////////////////////////////
  //                      GET '/:id'                        //
  ////////////////////////////////////////////////////////////

  api.get('/:id', (req, res, next) => {
    User.findById({ _id: req.params.id })
      .populate([{path: 'mirror'}])
      .exec()
      .then(user => {
        res.status(200).send(defaultResponseModel(true, 'User has been succesfully found.', {user: user}));
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'User does not exist in Database'));
        return next();
      })
  })

  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', (req, res) => {
    User.register(new User({
      username: req.body.username
    }), req.body.password, (err, user) => {

      if (err) {
        if (err.name === 'MissingUsernameError' || err.name === 'MissingPasswordError') {
          res.status(401);
          res.json(defaultResponseModel(false, 'Must have a valid email or password.', []));
        } else if (err.name === 'UserExistsError') {
          res.status(401).json(defaultResponseModel(false, 'A user already exists already . Please try again', []));
        } else if (err.name === 'ValidationError') {
          res.status(401).json(defaultResponseModel(false, 'Invalid JSON request. Please check and try again', []));
        } else if (err.name === 'MongoError') {
          res.status(401).json(defaultResponseModel(false, 'Unauthorized: ' + err.message, []));
        }
      else if (err.name === 'MongoError' && err.code === 11000) {
            res.status(401).json(defaultResponseModel(false, 'A user with that e-mail already exists. Please try again', []));
        }
      }

      if(res) {
        console.log(res);
      }

      passport.authenticate(
        'local', {
          session: false,
          scope: []
        }
      ), generateAccessToken({user}, res)
    });
  });

  ////////////////////////////////////////////////////////////
  //                      PUT '/:id'                        //
  ////////////////////////////////////////////////////////////

  return api;
}
