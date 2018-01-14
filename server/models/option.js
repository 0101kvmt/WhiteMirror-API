import mongoose from 'mongoose';

const options = ['Weather', 'Time', 'Icon', 'To-do', 'Quotes', 'News', 'Twitter'];


let Option = new Schema({
  option1: {
     type: String,
     enum: options,
     font: {type: String, default: 'Raleway'}
     fontSize: {type: number, default: 12},
     padding: {type: number, default: 5}
  },
})

module.exports = mongoose.model('Option', OptionSchema)
