/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| axios        - promise based HTTP client for the browser and node.js
| TokenService - manages JWT token within the app
|
*/
import axios            from 'axios';
import { TokenService } from '../../services/token.service';

/**
 * Http client helper methods
 */
export default {

    /**
     * Set client headers
     */
    setHeaders: () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.raw()}`;
    }

};