import mongoose from 'mongoose';

let Schema = mongoose.Schema;


let ToDoSchema = new Schema({
  toDo: {
     type: String,
     required: true
   },
  dueDate: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('ToDo', ToDoSchema);
