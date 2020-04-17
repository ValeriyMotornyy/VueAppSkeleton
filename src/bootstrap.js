/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| Globally exposing various modules used in the application
|
| Vue    - vue instance
| lodash - js utility belt used to handle object, collections, strings
| axios  - promise based HTTP client for the browser and node.js
| moment - used to parse, validate, manipulate, and display dates and times in JavaScript.
|
*/
import Vue    from 'vue';
import lodash from 'lodash';
import axios  from 'axios';
import moment from 'moment';

// Vue global import
Object.defineProperty(Vue.prototype, '_',      { value: lodash });
Object.defineProperty(Vue.prototype, 'axios',  { value: axios });
Object.defineProperty(Vue.prototype, 'moment', { value: moment });

