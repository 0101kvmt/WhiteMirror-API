////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     summary: Verifies the Auth Token
 *     description:
 *       "Verifies the Auth Token"
 *     tags:
 *       - auth
 *     parameters:
 *       - name: accessToken
 *         in: query
 *         required: true
 *         type: string
 *         description: The access token from authentication into the API
 *     responses:
 *       200:
 *         description: Successfully authenticated token
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *             data:
 *               type: array
 *         examples:
 *           application/json: {
 *             "status": "Success",
 *             "message": "Successfully authenticated token!",
 *             "data": [
 *                {
 *                  "status": "Success!",
 *                  "message": "Access Token is valid",
 *                  "data": {
 *                      "decoded": {
 *                      "_id": "59e00ef6cc8ada4a55147804",
 *                      "iat": 1507856119,
 *                      "exp": 1539392119
 *                      },
 *                    "valid": true
 *               }
 *              }
*            ]
 *           }
 *       401:
 *         description: Failute to Authenticate
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *             data:
 *               type: array
 *         examples:
 *           application/json: {
 *             "status": "Failure",
 *             "message": "Authentication failed!",
 *             "data": []
 *           }
 *       409:
 *         description: Invalid json structure
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *             data:
 *               type: array
 *         examples:
 *           application/json: {
 *             "status": "Failure",
 *             "message": "Check your json request body!",
 *             "data": []
 *           }
 */


////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
