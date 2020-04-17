/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Loading various modules required by node server.
|
| express - Fast, unopinionated, minimalist web framework for node
| history - Middleware to proxy requests through a specified index page
| cors    - Node Express cors handler
| server  - Node Express server
| port    - Server port
|
*/
require('dotenv').config();
const express = require('express');
const history = require('connect-history-api-fallback');
const cors    = require('cors');
const server  = express();
const port    = process.env.APP_PORT || 3000;

/*
    Server configurations
 */
server.use(history());
server.use(cors());
server.use(express.static(__dirname + '/public'));

/*
    App routes
 */
server.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

/*
    App Health check
 */
server.get('/healthcheck', function(request, response) {

    const payload = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
    };

    try {
        response.send();
    } catch (exception) {
        payload.message = exception;
        response.status(503).send();
    }
});

/*
    Run server (listen to set port)
 */
server.listen(
    port,
    () => console.log(
        `Example app listening on port ${port}!`,
        `App served`
    )
);
