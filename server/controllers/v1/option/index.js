import { Router } from 'express';
import Option from './../../../models/option';
import Section from './../../../models/section';
import Mirror from './../../../models/mirror';

import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
  let api = Router();

  api.get('/', (req, res) => {
    Option.find({})
      .exec()
      .then(option => {
        res.status(200).send(defaultResponseModel(true, 'Got Option', {option: option}));
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
        const section = new Section({
          sectionName: req.body.sectionName,
          options: option._id
        })

        section.save()
          .then(() => {
            const mirror = new Mirror({
              section: section._id
            })

            mirror.save()
              .then(() => {
                  res.status(200).send(defaultResponseModel(true,'Option created', {option_id: option._id}))
              })
          })

      })

  })

    return api;

}
