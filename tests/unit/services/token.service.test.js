import { TokenService }                   from '../../../app/services/token.service';
import { valid, invalid, expired, token } from '../../mocks/token.mock';

// Clear tokens from local store after each tests
afterEach(() => { TokenService.clear(); });

describe('TokenService', () => {

    /**
     * @public
     *  TokenService.set
     *  TokenService.raw
     *
     * @private
     *  _token.store
     *  _token.get
     */
    test('is stored and retrieved as a raw token', () => {

        TokenService.set(valid);

        expect(TokenService.raw()).toBe(valid);

    });

    /**
     * @public
     *  TokenService.set
     *  TokenService.get
     *
     * @private
     *  _token.store
     *  _token.get
     *  _token.decode
     *  _token.expired
     */
    test('is stored and retrieved as a parsed token', () => {

        TokenService.set(valid);

        expect(TokenService.get()).toEqual(expect.objectContaining(token));

    });

    /**
     * @public
     *  TokenService.set
     *  TokenService.get
     *  TokenService.clear
     *
     * @private
     *  _token.store
     *  _token.get
     *  _token.decode
     *  _token.invalid
     */
    test('is stored and cleared', () => {

        TokenService.set(valid);
        TokenService.clear();

        expect(TokenService.get()).toBeFalsy();

    });

    /**
     * @public
     *  TokenService.set
     *  TokenService.get
     *
     * @private
     *  _token.store
     *  _token.get
     *  _token.decode
     *  _token.expired
     *  _token.remove
     *  _token.invalid
     */
    test('is an expired JWT token', () => {

        TokenService.set(expired);

        expect(TokenService.get()).toBeFalsy();

    });

    /**
     * @public
     *  TokenService.set
     *  TokenService.get
     *
     * @private
     *  _token.store
     *  _token.get
     *  _token.decode
     *  _token.invalid
     */
    test('is an invalid JWT token', () => {

        TokenService.set(invalid);

        expect(TokenService.get()).toBeFalsy();

    });

});