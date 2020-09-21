/*
|-----------------------------------------------------------------------------------------------
| Routes Importer
|-----------------------------------------------------------------------------------------------
|
| Importing all .routes.js files in the application. This is done to bundle the routes from
| each individual module in the application and export array of routes to VueRouter.
|
| _ - lodash, js utility belt
|
*/
import _ from 'lodash';

let routes = [];

// Dynamically require all files with suffix "routes"
let req = require.context('../../', true, /\.routes.js$/);

req.keys().forEach(filename => {

    // Require each route file
    let file = req(filename).default;

    // Append routes array
    routes.push(file);
});

// Transform and export
export default _.flatten(routes);