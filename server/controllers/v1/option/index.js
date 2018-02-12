import { Router } from 'express';
import Option from './../../../models/option';
import Section from './../../../models/section';
import Mirror from './../../../models/mirror';
import User from './../../../models/user';

import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////


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

  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', (req, res) => {

    console.log("req", req.body);

    const option = new Option({
      option: req.body.enum,
      font: req.body.font,
      fontSize: req.body.fontSize,
      padding: req.body.padding
    })

    option.save()
      .then((option) => {
        res.status(200).send(defaultResponseModel(true,'Option created', {option_id: option._id}));
        Section.update({_id: req.body.section}, { $push: { options: option._id }})
        .exec();
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Option failed to post: ' + err));
      })

  });

  ////////////////////////////////////////////////////////////
  //                    DELETE '/:id'                       //
  ////////////////////////////////////////////////////////////

  api.delete('/:id', (req,res) => {
    Option.remove({_id: req.params.id})
    .then((option) => {
      res.status(200).send(defaultResponseModel(true,'Option deleted', {option_id: option._id}));
    })
    .catch(err => {
      res.status(404).send(defaultResponseModel(false, 'Option failed to post: ' + err));
    })

  });
  ////////////////////////////////////////////////////////////
  //                       PUT '/'                          //
  ////////////////////////////////////////////////////////////

    return api;

}
