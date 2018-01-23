import { Router } from 'express';
import Section from './../../../models/section';

import { defaultResponseModel } from './../../../utils/response';

export default ({ db }) => {
  let api = Router();

  ////////////////////////////////////////////////////////////
  //                         GET                            //
  ////////////////////////////////////////////////////////////

  api.get('/', (req, res) => {
    Section.find({})
        .populate({path: 'options'})
        .exec()
        .then(section => {
            res.status(200).send(defaultResponseModel(true, 'Section has been succesfully found', {section: section}));
        })
        .catch(err => {
          res.status(404).send(defaultResponseModel(false, 'Section does not exist in database'));
        })
  });

  ////////////////////////////////////////////////////////////
  //                       GET /:id                         //
  ////////////////////////////////////////////////////////////

  api.get('/:id', (req, res) => {
    Section.findById({_id: req.params.id})
        .populate({path: 'options'})
        .exec()
        .then(section => {
          res.status(200).send(defaultResponseModel(true, 'Section has been successfully found', {section: section}));
        })
        .catch(err => {
          res.status(404).send(defaultResponseModel(false, 'Section does not exist'));
        })
  });

    return api;

}
