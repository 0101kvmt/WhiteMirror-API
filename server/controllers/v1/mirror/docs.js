////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


/**
   * @swagger
   * /mirror:
   *   get:
   *     summary: Gets all Mirrors
   *     description:
   *       "Gets all Mirrors"
   *     tags:
   *       - Mirror
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
   *                "message": "Got Mirrors",
   *                "data": {
   *                     "mirror": [
   *                                 {
   *                                     "_id": "5a606d735a56f838d12e3004",
   *                                     "__v": 0,
   *                                     "section": [
   *                                         {
   *                                             "_id": "5a606d735a56f838d12e3003",
   *                                             "sectionName": "yee haw",
   *                                             "__v": 0,
   *                                             "options": [
   *                                                 {
   *                                                     "_id": "5a606d735a56f838d12e3002",
   *                                                     "__v": 0,
   *                                                     "padding": 13,
   *                                                     "fontSize": 14,
   *                                                     "font": "Sans Serif"
   *                                                 }
   *                                             ]
   *                                         }
   *                                     ]
   *                                 }
   *                              ]
   *                }
   *              }
   *     responses:
   *       200:
   *         description: Mirror has been found.
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
   *             "message": "Mirror Found.",
   *             "data": {
   *                     "mirror": [
   *                                 {
   *                                     "_id": "5a606d735a56f838d12e3004",
   *                                     "__v": 0,
   *                                     "section": [
   *                                         {
   *                                             "_id": "5a606d735a56f838d12e3003",
   *                                             "sectionName": "yee haw",
   *                                             "__v": 0,
   *                                             "options": [
   *                                                 {
   *                                                     "_id": "5a606d735a56f838d12e3002",
   *                                                     "__v": 0,
   *                                                     "padding": 13,
   *                                                     "fontSize": 14,
   *                                                     "font": "Sans Serif"
   *                                                 }
   *                                             ]
   *                                         }
   *                                     ]
   *                                 }
   *                              ]
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
   *             "message": "Mirror not found.",
   *             "data": []
   *           }
   */

   ////////////////////////////////////////////////////////////
   //                      GET '/:id'                        //
   ////////////////////////////////////////////////////////////

   /**
      * @swagger
      * /mirror/:id:
      *   get:
      *     summary: Get Mirror by id
      *     description:
      *       "Gets Mirror by id"
      *     tags:
      *       - Mirror
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
      *                "message": "Got Mirror",
      *                "data": {
      *                     "mirror": [
      *                                 {
      *                                     "_id": "5a606d735a56f838d12e3004",
      *                                     "__v": 0,
      *                                     "section": [
      *                                         {
      *                                             "_id": "5a606d735a56f838d12e3003",
      *                                             "sectionName": "yee haw",
      *                                             "__v": 0,
      *                                             "options": [
      *                                                 {
      *                                                     "_id": "5a606d735a56f838d12e3002",
      *                                                     "__v": 0,
      *                                                     "padding": 13,
      *                                                     "fontSize": 14,
      *                                                     "font": "Sans Serif"
      *                                                 }
      *                                             ]
      *                                         }
      *                                     ]
      *                                 }
      *                              ]
      *                }
      *              }
      *     responses:
      *       200:
      *         description: Mirror has been found.
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
      *             "message": "Mirror Found.",
      *             "data": {
      *                     "mirror": [
      *                                 {
      *                                     "_id": "5a606d735a56f838d12e3004",
      *                                     "__v": 0,
      *                                     "section": [
      *                                         {
      *                                             "_id": "5a606d735a56f838d12e3003",
      *                                             "sectionName": "yee haw",
      *                                             "__v": 0,
      *                                             "options": [
      *                                                 {
      *                                                     "_id": "5a606d735a56f838d12e3002",
      *                                                     "__v": 0,
      *                                                     "padding": 13,
      *                                                     "fontSize": 14,
      *                                                     "font": "Sans Serif"
      *                                                 }
      *                                             ]
      *                                         }
      *                                     ]
      *                                 }
      *                              ]
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
      *             "message": "Mirror not found.",
      *             "data": []
      *           }
      */


////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
