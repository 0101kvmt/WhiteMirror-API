import { Router } from 'express';
import Mirror from './../../../models/mirror';

import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    Mirror.find({})
      .populate({path: 'section'})
      .exec()
      .then(mirror => {
        res.status(200).send(defaultResponseModel(true, 'Got Mirror', {mirror: mirror}))
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Mirror does not exist in Database'))
      })
  });

  api.post('/', (req, res) => {

  })

    return api;

}
