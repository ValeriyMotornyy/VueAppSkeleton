/*
|-----------------------------------------------------------------------------------------------
| Store Importer
|-----------------------------------------------------------------------------------------------
|
| Importing all .store.js files in the application. This is done to bundle the Vuex stores from
| each individual module in the application and export array of stores to Vuex store.
|
| _ - lodash, js utility belt
|
*/
import _ from 'lodash';

let stores = [];

// Dynamically require all files with suffix "store"
let req = require.context('../../', true, /\.store.js$/);

req.keys().forEach(filename => {

    // Require each store file
    let file = req(filename).default;

    // Explode filepath
    let segments = _.split(filename, '/');

    // Set name as last segment
    let name = _.last(segments);

    // Remove file extension
    name = _.replace(name, '.store.js', '');

    // Set case convention
    name = _.camelCase(name);

    // Define namespaced store name
    let module = `${file.namespace}/${name}`;

    // Append modules array
    stores[module] = file;
});

// Transform and export
export default stores;