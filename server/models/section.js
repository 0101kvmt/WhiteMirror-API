import mongoose from 'mongoose';


let Schema = mongoose.Schema;

let SectionSchema = new Schema({
  sectionName: {
    type: string,
    required: true
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option'
  }]
})

module.exports = mongoose.model('Section', SectionSchema);
