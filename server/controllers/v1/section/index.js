import { Router } from 'express';
import Section from './../../../models/section';
import Option from './../../../models/option';
import Mirror from './../../../models/mirror';

import { defaultResponseModel } from './../../../utils/response';

export default ({db}) => {
  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
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

        .exec()
        .then(section => {
          res.status(200).send(defaultResponseModel(true, 'Section has been successfully found', {section: section}));
        })
        .catch(err => {
          res.status(404).send(defaultResponseModel(false, 'Section does not exist'));
        })
  });

  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////


  api.post('/', (req, res) => {
    let section = new Section({
      sectionName: req.body.sectionName || "Section",
      options: []
    });

    section.save()
      .then((section) => {

        Mirror.update({_id: req.body.mirrorId}, { $push: { section: section._id }})
        .exec();

        const option = new Option({
          option: req.body.enum,
          font: req.body.font,
          fontSize: req.body.fontSize,
          padding: req.body.padding
        })


        option.save()
          .then(() => {
            Section.update({_id: section._id}, { $push: { options: option._id }})
            .exec();
          })
          .catch(err => {
            res.status(404).send(defaultResponseModel(false, 'Section failed to post: ' + err));
          });

        res.status(200).send(defaultResponseModel(true,'Section created', {section: section}));


      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Section failed to post: ' + err));
      })



  })

  ////////////////////////////////////////////////////////////
  //                    DELETE '/:id'                       //
  ////////////////////////////////////////////////////////////

  api.delete('/:id', (req,res) => {

    Section.remove({_id: req.params.id})
    .then((option) => {
      res.status(200).send(defaultResponseModel(true,'Section deleted', {option_id: option._id}));
      Section.update({_id: req.body.section}, { $pull: { options: option._id }})
      .exec();
    })
    .catch(err => {
      res.status(404).send(defaultResponseModel(false, 'Section failed to post: ' + err));
    })

  });
  ////////////////////////////////////////////////////////////
  //                       PUT '/'                          //
  ////////////////////////////////////////////////////////////

    return api;

}
