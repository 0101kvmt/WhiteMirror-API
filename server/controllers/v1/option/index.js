import { Router } from 'express';
import Option from './../../../models/option';


import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    option.find({})
      .exec()
      .then(option => {
        res.status(200).send(defaultResponseModel(true, 'Got Option', {option: option}))
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Mirror does not exist in Database'))
      })
  });

  api.post('/', (req, res) => {
    const option = new Option({
      enum: req.body.enum,
      font: req.body.font,
      fontSize: req.body.fontSize,
      padding: req.body.padding
    })

    option.save()
      .then(() => {
        res.status(200).send(defaultresponseModel(true,'Option created', {_id: option._id}))
      })

  })

    return api;

}
