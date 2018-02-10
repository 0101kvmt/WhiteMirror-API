////////////////////////////////////////////////////////////
//                       GET '/'                          //
////////////////////////////////////////////////////////////


/**
   * @swagger
   * /toDo:
   *   get:
   *     summary: Gets all ToDo
   *     description:
   *       "Gets all To-dos"
   *     tags:
   *       - ToDo
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
   *                "message": "Got To Do",
   *                "data": {
   *                    "toDo": [
   *                        {
   *                            "_id": "5a606a75c919b53895963fea",
   *                            "__v": 0,
   *                            "toDo": "do your homework",
   *                            "dueDate": 14:05:02 pm,
   *                        },
   *                    ]
   *                }
   *              }
   *     responses:
   *       200:
   *         description: toDo has been found.
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
   *             "message": "toDo Found.",
   *             "data": {
   *              "toDo": [
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
      * /toDo/:id:
      *   get:
      *     summary: Gets to-Do by id
      *     description:
      *       "Gets to-Do by id"
      *     tags:
      *       - toDo
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
      *                "message": "Got To-do",
      *                "data": {
      *                    "toDo": [
      *                        {
      *                            "_id": "5a606a75c919b53895963fea",
      *                            "__v": 0,
      *                            "toDo": "Clean your cabinet",
      *                            "dueDate": 23:02:39 pm,
      *                        },
      *                    ]
      *                }
      *              }
      *     responses:
      *       200:
      *         description: ToDo has been found.
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
      *             "message": "ToDo Found.",
      *             "data": {
      *              "toDo": [
      *                  {
      *                      "_id": "5a606f3b17edd0390a7dcdfd",
      *                            "__v": 0,
      *                            "toDo": "Clean your cabinet",
      *                            "dueDate": 23:02:39 pm,
      *                  }
      *              ]
      *          }
      *           }
      *       401:
      *         description: ToDo cannot be found.
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
      *             "message": "ToDo not found.",
      *             "data": []
      *           }
      */

////////////////////////////////////////////////////////////
//                       POST '/'                         //
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//                       PUT '/'                          //
////////////////////////////////////////////////////////////
