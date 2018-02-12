////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

require('dotenv').config();
import mongoose from 'mongoose';
import Option from './../models/option';

////////////////////////////////////////////////////////////
//                    Mongoose Connect                    //
////////////////////////////////////////////////////////////

let dbURI = "mongodb://admin:admin@ds231658.mlab.com:31658/whitemirrordb" || process.env.MONGODB_URI;

console.log(Option.schema.path('option').enumValues);

////////////////////////////////////////////////////////////
//                 Passport User Set-up                   //
////////////////////////////////////////////////////////////


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
