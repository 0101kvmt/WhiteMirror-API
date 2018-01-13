////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

import http from 'http';
import express from 'express';

import routes from './server/routes'

let app = express();

var port = 3131;

//API Routes v1
app.use('/', routes);


////////////////////////////////////////////////////////////
//                 Listening to server                    //
////////////////////////////////////////////////////////////


app.server = http.createServer(app);


app.server.listen(port, () => console.log('connected to port ' + port));


export default app;
