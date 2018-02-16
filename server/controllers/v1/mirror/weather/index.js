import { Router } from 'express';

import * as weatherController from './controller.js';

export default({ db }) => {
  let api = Router();

  const CircularJson = require('circular-json');

  ////////////////////////////////////////////////////////////
  //                       GET '/w'                         //
  ////////////////////////////////////////////////////////////

  api.route('/w')
    .get(weatherController.getWeather);

  ////////////////////////////////////////////////////////////
  //                       POST '/w'                        //
  ////////////////////////////////////////////////////////////

  api.route('/w')
    .post(weatherController.getWeather);

  return api;

}
