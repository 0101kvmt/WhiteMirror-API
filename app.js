import http from 'http';
import express from 'express';

let app = express();

var port = 3131;

app.server = http.createServer(app);

app.get('/', (req, res) => res.send('test 1'))

app.server.listen(port, () => console.log('connected to port ' + port));


export default app;
