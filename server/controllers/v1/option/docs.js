////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


/**
   * @swagger
   * /option:
   *   get:
   *     summary: Gets all Options
   *     description:
   *       "Gets all Options"
   *     tags:
   *       - Option
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
   *                "message": "Got Option",
   *                "data": {
   *                    "option": [
   *                        {
   *                            "_id": "5a606a75c919b53895963fea",
   *                            "__v": 0,
   *                            "padding": 13,
   *                            "fontSize": 14,
   *                            "font": "Sans Serif"
   *                        },
   *                    ]
   *                }
   *              }
   *     responses:
   *       200:
   *         description: Option has been found.
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
   *             "message": "Option not found.",
   *             "data": []
   *           }
   */

   ////////////////////////////////////////////////////////////
   //                      GET '/:id'                        //
   ////////////////////////////////////////////////////////////

   /**
      * @swagger
      * /option/:id:
      *   get:
      *     summary: Gets Option by id
      *     description:
      *       "Gets Option by id"
      *     tags:
      *       - Option
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
      *                "message": "Got Option",
      *                "data": {
      *                    "option": [
      *                        {
      *                            "_id": "5a606a75c919b53895963fea",
      *                            "__v": 0,
      *                            "padding": 13,
      *                            "fontSize": 14,
      *                            "font": "Sans Serif"
      *                        },
      *                    ]
      *                }
      *              }
      *     responses:
      *       200:
      *         description: Section has been found.
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
      *             "message": "Option not found.",
      *             "data": []
      *           }
      */

////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
