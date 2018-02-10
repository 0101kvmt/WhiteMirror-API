import { Router } from 'express';
import ToDo from './../../../models/toDo';
import User from './../../../models/user';

import { defaultResponseModel } from './../../../utils/response';

export default({db}) => {

  let api = Router();

  ////////////////////////////////////////////////////////////
  //                       GET '/'                          //
  ////////////////////////////////////////////////////////////

  api.get('/', (req, res) => {
    ToDo.find({})
      .exec()
      .then(toDo => {
        res.status(200).send(defaultResponseModel(true, 'Got ToDo List', {toDo: toDo}));
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'ToDo does not exist in Database'))
      })
  });

  ////////////////////////////////////////////////////////////
  //                       POST '/'                         //
  ////////////////////////////////////////////////////////////

  api.post('/', (req, res) => {

    console.log("req", req.body);

    const toDo = new ToDo({
      toDo: req.body.toDo,
      dueDate: req.body.dueDate
    });

    toDo.save()
      .then((toDo) => {
        res.status(200).send(defaultResponseModel(true,'toDo created', {toDo: toDo._id}));
        User.update({_id: req.body.userId}, { $push: { toDoList: toDo._id }})
        .exec();
      })
      .catch(err => {
        res.status(404).send(defaultResponseModel(false, 'toDo failed to post: ' + err));
      })

  });

  ////////////////////////////////////////////////////////////
  //                       PUT '/'                          //
  ////////////////////////////////////////////////////////////

    return api;

}
