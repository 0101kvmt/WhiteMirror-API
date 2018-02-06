import { Router } from 'express';
import axios from 'axios';

import Mirror from './../../../models/mirror';
import Section from './../../../models/section';
import Option from './../../../models/option';

import { defaultResponseModel } from './../../../utils/response';

export default({ db }) => {
  let api = Router();

  const CircularJson = require('circular-json');

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

  api.get('/weather', (req, res) => {

    const headers = {"Access-Control-Allow-Origin": "*"};

    const apiUrl = 'https://api.darksky.net/forecast/' + "de59a4e908bcf93e49df5a1761431480/37.338208,-121.886329";

    console.log(apiUrl);

    axios.get('https://api.darksky.net/forecast/de59a4e908bcf93e49df5a1761431480/37.338208,-121.886329')
      .then(weatherz => {
        let json = CircularJson.stringify(weatherz);
        res.send(json)
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'Weather failed to get: ' + err))
      })
  });

  api.post('/', (req, res) => {

  })

    return api;

}
