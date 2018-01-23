import { Router } from 'express';
import User from './../../../models/user';

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
    User.findById(req.params.id)
      .populate({path: 'mirror'})
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

  })

  ////////////////////////////////////////////////////////////
  //                      PUT '/:id'                        //
  ////////////////////////////////////////////////////////////

  return api;
}
