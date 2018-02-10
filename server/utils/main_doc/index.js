import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

  console.log("hi");

export const spec = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'White Mirror',
      version: '0.1'
    },
    produces: ['application/json'],
    consumes: ['application/json'],
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    security: [
      { jwt: [] }
    ],
    tags: [
      {
        name: 'Auth',
        description: 'Authentication for White Mirror'
      },
      {
        name: 'User',
        description: 'White Mirror\'s Users'
      },
      {
        name: 'Mirror',
        description: 'User\'s Mirrors'
      },
      {
        name: 'Section',
        description: 'Mirror\'s Sections'
      },
      {
        name: 'Option',
        description: 'Section\'s Options'
      },
      {
        name: 'ToDo',
        description: 'Todo\'s Lists'
      },
    ]
  },
  apis: [
    './server/controllers/v1/user/docs.js',
    './server/controllers/v1/mirror/docs.js',
    './server/controllers/v1/section/docs.js',
    './server/controllers/v1/option/docs.js',
    './server/controllers/v1/toDo/docs.js',
  ],

});
