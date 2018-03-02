import mongoose from 'mongoose';

import Option from './option';

let Schema = mongoose.Schema;

let SectionSchema = new Schema({
  sectionName: {
    type: String,
    required: true
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option'
  }],
})

module.exports = mongoose.model('Section', SectionSchema);
