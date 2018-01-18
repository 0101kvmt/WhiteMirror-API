////////////////////////////////////////////////////////////
//                        Requires                        //
////////////////////////////////////////////////////////////

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './server/routes';

let app = express();

var port = 3131;


// Parse application/json
var urlencoded_parser = bodyParser.urlencoded({
    extended: true
});

app.use(bodyParser.json());
app.use(urlencoded_parser);

//API Routes v1
app.use('/v1', routes);

////////////////////////////////////////////////////////////
//                 Listening to server                    //
////////////////////////////////////////////////////////////


app.server = http.createServer(app);


app.server.listen(port, () => console.log('connected to port ' + port));


export default app;
