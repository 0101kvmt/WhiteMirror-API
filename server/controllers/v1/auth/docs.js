////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

/**
   * @swagger
   * /auth:
   *   post:
   *     summary: Authenticates User
   *     description:
   *       "Authenticates User"
   *     tags:
   *       - Auth
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           required:
   *           properties:
   *               {
   *                "status": "Success!",
   *                "message": "Authenticated User",
   *                "data": {
   *                     "user": {
   *                         "5a695c9260cba909ef960453": {
   *                             "_id": "5a695c9260cba909ef960453",
   *                             "username": "user1",
   *                             "__v": 0,
   *                             "createdDate": "2018-01-25T04:26:58.445Z",
   *                             "mirror": []
   *                         }
  *                     }
   *                }
   *              }
   *     responses:
   *       200:
   *         description: User has been found.
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
   *             "message": "Option Found.",
   *             "data": {
   *                     "user": {
   *                         "5a695c9260cba909ef960453": {
   *                             "_id": "5a695c9260cba909ef960453",
   *                             "username": "user1",
   *                             "__v": 0,
   *                             "createdDate": "2018-01-25T04:26:58.445Z",
   *                             "mirror": []
   *                         }
   *                      }
   *          }
   *           }
   *       401:
   *         description: Section cannot be found.
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
   *             "message": "User not found.",
   *             "data": []
   *           }
   */


////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
