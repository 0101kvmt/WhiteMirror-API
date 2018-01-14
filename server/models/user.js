import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please enter a valid username!'],
    unique: [true, 'Sorry, this username is already taken.'],
    maxLength: 15
  },
  password: {
    type: String,
    min: [6, 'Your password should be greater than 6 characters.']
  },
  mirror: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Mirror
    }
  ],
  createdDate: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', UserSchema);
