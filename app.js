////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import cors from 'cors';

import { spec } from './server/utils/main_doc';
import routes from './server/routes';
import User from './server/models/user';

const LocalStrategy = require('passport-local').Strategy;

let app = express();

var swggerdocs = spec;

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

app.use(express.static(__dirname + '/build'));

app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
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


////////////////////////////////////////////////////////////
//                         Routes                         //
////////////////////////////////////////////////////////////

app.use('/v1', routes);

// Serve swagger

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(spec);
});

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(spec));


////////////////////////////////////////////////////////////
//                 Listening to server                    //
////////////////////////////////////////////////////////////


app.server = http.createServer(app);


app.server.listen(port, () => console.log('connected to port ' + port));


export default app;
