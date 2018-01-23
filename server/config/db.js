////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

require('dotenv').config();
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////
//                    Mongoose Connect                    //
////////////////////////////////////////////////////////////

let dbURI = "mongodb://localhost/WhiteMirror" || process.env.MONGODB_URI;

console.log(Option.schema.path('option1').enumValues);

export default callback => {

  mongoose.Promise = global.Promise;

  let db = mongoose.connect(
    dbURI,
    {
      useMongoClient: true
    }
  );
  callback(db);
  console.log("db running");

}
