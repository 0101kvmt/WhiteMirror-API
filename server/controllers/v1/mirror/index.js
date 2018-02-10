import { Router } from 'express';
import axios from 'axios';

import Mirror from './../../../models/mirror';
import Section from './../../../models/section';
import Option from './../../../models/option';

import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
  let api = Router();

  const CircularJson = require('circular-json');

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////

  api.get('/', (req, res) => {
    Mirror.find({})
      .populate({
        path: 'section',
        populate: {
          path: 'options',
          model: 'Option'
        }
      })
      .exec()
      .then(mirror => {
        res.status(200).send(defaultResponseModel(true, 'Got Mirror', {mirror: mirror}))
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Mirror does not exist in Database'))
      })
  });

  ////////////////////////////////////////////////////////////
  //                      GET '/:id'                        //
  ////////////////////////////////////////////////////////////

  api.get('/:id', (req, res, next) => {
    Mirror.findById({ _id: req.params.id })
      .populate({
        path: 'section',
        populate: {
          path: 'options',
          model: 'Option'
        }
      })
      .exec()
      .then(mirror => {
        res.status(200).send(defaultResponseModel(true, 'Mirror has been succesfully found.', {mirror: mirror}));
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Mirror does not exist in Database'));
        return next();
      })
  });


  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', (req, res) => {
    let mirror = new Mirror({
      location: req.body.location,
      section: [],
    });

    mirror.save()
      .then(mirror => {
        res.status(200).send(defaultResponseModel(true,'Mirror created', {mirror: mirror._id}));
        User.update({_id: req.body.user}, { $push: { mirror: mirror._id }})
        .exec();
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Failed to create Section.'));
      })



  })
  ////////

  ////////////////////////////////////////////////////////////
  //                   GET '/weather'                       //
  ////////////////////////////////////////////////////////////

  api.get('/weather', (req, res) => {

    const headers = {"Access-Control-Allow-Origin": "*"};

    const apiUrl = 'https://api.darksky.net/forecast/' + "de59a4e908bcf93e49df5a1761431480/37.338208,-121.886329";

    console.log(apiUrl);

    axios.get('https://api.darksky.net/forecast/de59a4e908bcf93e49df5a1761431480/37.338208,-121.886329')
      .then(weather => {
        res.status(200).send(defaultResponseModel(true, 'Got Weather', {Weather: weather.data}))
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Weather failed to get: ' + err))
      })
  });

  return api;

}
