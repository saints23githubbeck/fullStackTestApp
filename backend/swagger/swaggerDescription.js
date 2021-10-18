const swaggerJSDoc = require("swagger-jsdoc");

  const swaggerDefinition = {
    openapi: "3.0.0",
    info: {       
     title: "Express API for Client Application",
        version: "1.0.0",
        description: 
          "This is a REST API application made with Express.",
        contact: {
        name: "ArthurShadrack",
        // url: "https://jsonplaceholder.typicode.com",
        },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  };

  const options = {
    swaggerDefinition,
    apis: ["./swagger/**/*.yaml"],
  };
  
  
  const specs = swaggerJSDoc(options)

module.exports = specs;  