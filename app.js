////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import routes from './server/routes';
import User from './server/models/user';

const LocalStrategy = require('passport-local').Strategy;

let app = express();

var port = 3131;


////////////////////////////////////////////////////////////
//                      MiddleWare                        //
////////////////////////////////////////////////////////////

// Parse application/json
var urlencoded_parser = bodyParser.urlencoded({
    extended: true
});

app.use(bodyParser.json());
app.use(urlencoded_parser);


////////////////////////////////////////////////////////////
//                   Passport Config                      //
////////////////////////////////////////////////////////////

app.use(passport.initialize());

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  User.authenticate()
));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//API Routes v1
app.use('/v1', routes);


////////////////////////////////////////////////////////////
//                 Listening to server                    //
////////////////////////////////////////////////////////////


app.server = http.createServer(app);


app.server.listen(port, () => console.log('connected to port ' + port));


export default app;
