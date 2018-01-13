import mongoose from 'mongoose';

const options = ['Weather', 'Time', 'Icon', 'To-do', 'Quotes', 'News', 'Twitter']
;
let Schema = mongoose.Schema;

let Section = new Schema({
  option1: {
     type: String,
     enum: options
  },
  option2: {
     type: String,
     enum: options
  },
  option3: {
     type: String,
     enum: options
  }
  option4: {
     type: String,
     enum: options
  }
  option5: {
     type: String,
     enum: options
  }
})
