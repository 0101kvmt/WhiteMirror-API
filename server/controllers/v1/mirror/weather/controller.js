import { Router } from 'express';
import axios from 'axios';

import { defaultResponseModel } from './../../../../utils/response';


export const getWeather = (req, res) => {
  const apiUrl = 'https://api.darksky.net/forecast/' + "de59a4e908bcf93e49df5a1761431480/" + req.body.latitude + "," + req.body.longitude;

  console.log("apiUrl");

  axios.get(apiUrl)
    .then(response => {
      console.log("got");
      res.status(200).send(defaultResponseModel(true, 'Got Weather', {Weather: response.data}))
    })
    .catch(err => {
      res.status(404).send(defaultResponseModel(false, 'Weather failed to get: ' + err))
    })
}
