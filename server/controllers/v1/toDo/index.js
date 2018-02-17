import { Router } from 'express';
import ToDo from './../../../models/toDo';
import User from './../../../models/user';
import * as ToDoController from './controller';

import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////

  api.get('/', (ToDoController.toDoGet));

  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', ToDoController.toDoAdd);

  ////////////////////////////////////////////////////////////
  //                       PUT '/'                          //
  ////////////////////////////////////////////////////////////

    return api;

}
