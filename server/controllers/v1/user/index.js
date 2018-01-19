import { Router } from 'express';
import User from './../../../models/user';

import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  api.get('/', (req, res) => {
    User.find({}, (err, users) => {
      let userMap = {};
      console.log('users', users);
      users.forEach((user) => {
        userMap[user._id] = user;
      });
      res.status(200).send(defaultResponseModel(true, 'User has been succesfully found', {user: userMap}))
    })
      .exec()
      .then(users => {
        res.status(200).send(defaultResponseModel(true, 'User has been successfully found', {users: users}));
      })
  })

  return api;
}
