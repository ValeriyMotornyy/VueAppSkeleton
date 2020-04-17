/*
|-----------------------------------------------------------------------------------------------
| Modules
|-----------------------------------------------------------------------------------------------
|
| jwtDecode - Small browser library that helps decoding JWTs token which are Base64Url encoded.
| moment    - Manages parsing, validation, manipulation, and display dates and times in JavaScript.
|
*/
import jwtDecode from 'jwt-decode';
import moment    from 'moment';

/**
 * Token key
 *
 * @type {string}
 */
const TOKEN_KEY = 'vue_skeleton_jwt_token';

/**
 * Private methods for managing tokens
 *
 * @type {{
 *      store: _token.store,
 *      get: _token.get,
 *      remove: _token.remove,
 *      decode: _token.decode,
 *      invalid: (function(): boolean),
 *      expired: _token.expired,
 * }}
 * @private
 */
const _token = {

    /**
     * Retrieve token from local store
     *
     * @returns {*}
     */
    get: () => {

        // Retrieve token from store
        let token = localStorage.getItem(TOKEN_KEY);

        // Handle no token found
        if (!token) {
            return _token.invalid();
        }

        return token;
    },

    /**
     * Decode token
     *
     * @param token
     * @returns {*}
     */
    decode: (token) => {
        try {
            return jwtDecode(token);
        } catch(error) {
            return _token.invalid();
        }
    },

    /**
     * Check if token has expired
     *
     * @param token
     * @returns {boolean}
     */
    expired: (token) => {
        try {
            return moment().format() > moment(token.timestamps.expires_at.date).format();
        } catch(error) {
            return _token.invalid();
        }
    },

    /**
     * Define token as invalid
     *
     * @returns {boolean}
     */
    invalid: () => {
        return false;
    },

    /**
     * Remove token from local store
     */
    remove: () => {
        localStorage.removeItem(TOKEN_KEY);
    },

    /**
     * Store token in local store
     */
    store: (token) => {
        localStorage.setItem(TOKEN_KEY, token);
    },
};


/**
 * Token Service used to handle access token (jwt)
 * Local Storage should only be managed through this service
 *
 * @type {{
 *      set: TokenService.set,
 *      get: TokenService.get,
 *      clear: TokenService.clear,
 *      raw: (function(): (*|*|*))
 * }}
 * @public
 */
const TokenService = {

    /**
     * Retrieve parsed token
     *
     * @returns {string|boolean}
     */
    get: () => {

        // Retrieve raw token
        var token = _token.get();

        // Decode token
        token = _token.decode(token);

        // Check if token has expired
        if (_token.expired(token)) {

            // Remove and clear token
            _token.remove();
            return _token.invalid();
        }

        return token;
    },

    /**
     * Retrieve raw token
     *
     * @returns {*}
     */
    raw: () => {
        return _token.get();
    },

    /**
     * Set token in local store
     */
    set: (token) => {
        _token.store(token);
    },

    /**
     * Remove current tokens
     */
    clear: () => {
        _token.remove();
    },

};

export { TokenService };