import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let MirrorSchema = new Schema({
  section: {
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Section'
    }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 5']
  },

});

function arrayLimit(val) {
  return val.length <= 1;
};

module.exports = mongoose.model('Mirror', MirrorSchema);
