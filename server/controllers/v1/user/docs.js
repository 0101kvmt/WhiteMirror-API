////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


/**
   * @swagger
   * /user:
   *   get:
   *     summary: Gets all Users
   *     description:
   *       "Gets all Users"
   *     tags:
   *       - User
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
   *                "message": "Got User",
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
   //                      GET '/:id'                        //
   ////////////////////////////////////////////////////////////

   /**
      * @swagger
      * /user/:id:
      *   get:
      *     summary: Gets User by id
      *     description:
      *       "Gets User by id"
      *     tags:
      *       - User
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
      *                "message": "Got User",
      *                "data": {
      *                     "user": {
      *                         "5a695c9260cba909ef960453": {
      *                             "_id": "5a695c9260cba909ef960453",
      *                             "username": "user1",
      *                             "__v": 0,
      *                             "createdDate": "2018-01-25T04:26:58.445Z",
      *                             "mirror": []
      *                         }
      *                      }
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
      *             "message": "Section Found.",
      *                "data": {
      *                     "user": {
      *                         "5a695c9260cba909ef960453": {
      *                             "_id": "5a695c9260cba909ef960453",
      *                             "username": "user1",
      *                             "__v": 0,
      *                             "createdDate": "2018-01-25T04:26:58.445Z",
      *                             "mirror": []
      *                         }
      *                      }
      *                }
      *              }
      *       401:
      *         description: Option cannot be found.
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
      *             "message": "Section not found.",
      *             "data": []
      *           }
      */

////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
