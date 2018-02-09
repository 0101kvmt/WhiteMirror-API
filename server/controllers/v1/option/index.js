import { Router } from 'express';
import Option from './../../../models/option';
import Section from './../../../models/section';
import Mirror from './../../../models/mirror';
import User from './../../../models/user';

import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
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
      enum: req.body.enum,
      font: req.body.font,
      fontSize: req.body.fontSize,
      padding: req.body.padding
    })

    console.log("user", req.body.user);

    console.log("section", req.body.sectionName);

    option.save()
      .then(() => {

        console.log("section2", req.body.sectionName);

        const section = new Section({
          sectionName: "req.body.sectionName",
          options: option._id
        })

        section.save()
          .then(() => {
            const mirror = new Mirror({
              section: section._id
            })

            mirror.save()
              .then(() => {
                console.log("mirrorzzzz", mirror);
                res.status(200).send(defaultResponseModel(true,'Option created', {option_id: option._id}));
                User.update({_id: req.body.user}, { $push: { mirror: mirror._id }})
                  .exec();
              })
              .catch(err => {
                res.status(404).send(defaultResponseModel(false, 'Mirror failed to post: ' + err));
              })
          })
          .catch(err => {
            res.status(404).send(defaultResponseModel(false, 'Section failed to post: ' + err));
          })

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
