/**
 * Valid JWT token
 * Payload:
 * {
 *   "user_id": 123,
 *   "pharmacy_id": 2,
 *   "organisation_id": 1,
 *   "timestamps": {
 *     "expires_at": {
 *       "date": "2099-01-01"
 *     }
 *   }
 * }
 *
 * @type {string}
 */
const valid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInBoYXJtYWN5X2lkIjoyLCJvcmdhbmlzYXRpb25faWQiOjEsInRpbWVzdGFtcHMiOnsiZXhwaXJlc19hdCI6eyJkYXRlIjoiMjA5OS0wMS0wMSJ9fX0.CHrA88b1cTDkDmtVnMUkZXxCb_cjBzMLgue99VU405E';

/**
 * Invalid jwt hash
 *
 * @type {string}
 */
const invalid = 'X2lkIjoxMjMsInBoYXJtYWN5X2lkIjoyLCJvcmdhbmlzYXRpb25f';

/**
 * Invalid JWT token
 * Payload:
 * {
 *   "user_id": 123,
 *   "pharmacy_id": 2,
 *   "organisation_id": 1,
 *   "timestamps": {
 *     "expires_at": {
 *       "date": "1099-01-01"
 *     }
 *   }
 * }
 *
 * @type {string}
 */
const expired = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInBoYXJtYWN5X2lkIjoyLCJvcmdhbmlzYXRpb25faWQiOjEsInRpbWVzdGFtcHMiOnsiZXhwaXJlc19hdCI6eyJkYXRlIjoiMTA5OS0wMS0wMSJ9fX0.pgZR4j_4WxIaKoDlPAyPP51HgWeZnaEx2ROtDsfbL7k';

/**
 * Parsed JWT token
 *
 * @type {{
 *    organisation_id: number,
 *    user_id: number,
 *    pharmacy_id: number,
 *    timestamps: {
 *       expires_at: {
 *          date: string
 *       }
 *    }
 * }}
 */
const token = {
   "user_id": 123,
   "pharmacy_id": 2,
   "organisation_id": 1,
   "timestamps": {
      "expires_at": {
         "date": "2099-01-01"
      }
   }
};

export { valid, invalid, expired, token };