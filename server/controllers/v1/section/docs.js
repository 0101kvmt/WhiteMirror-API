////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


/**
   * @swagger
   * /section:
   *   get:
   *     summary: Gets all Section
   *     description:
   *       "Gets all Section"
   *     tags:
   *       - Section
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           required:
   *           properties:
   *                   {
   *                                 "_id": "5a606f3b17edd0390a7dcdfe",
   *                                 "sectionName": "Another 1",
   *                                 "__v": 0,
   *                                 "options": [
   *                                     {
   *                                         "_id": "5a606f3b17edd0390a7dcdfd",
   *                                         "__v": 0,
   *                                         "padding": 32,
   *                                         "fontSize": 28,
   *                                         "font": "Helvetica"
   *                                     }
   *                                 ]
   *                           }
   *     responses:
   *       200:
   *         description: Sectioin has been found.
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
   *             "data": {
   *              "_id": "5a606f3b17edd0390a7dcdfe",
   *              "sectionName": "Another 1",
   *              "__v": 0,
   *              "options": [
   *                  {
   *                      "_id": "5a606f3b17edd0390a7dcdfd",
   *                      "__v": 0,
   *                      "padding": 32,
   *                      "fontSize": 28,
   *                      "font": "Helvetica"
   *                  }
   *              ]
   *          }
   *           }
   *       401:
   *         description: Opinion cannot be saved.
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
   //                      GET '/:id'                        //
   ////////////////////////////////////////////////////////////

   ////////////////////////////////////////////////////////////
   //                       POST '/'                         //
   ////////////////////////////////////////////////////////////

   ////////////////////////////////////////////////////////////
   //                       PUT '/'                          //
   ////////////////////////////////////////////////////////////
