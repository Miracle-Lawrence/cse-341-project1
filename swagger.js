const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API Documentation",
  },
  host: "cse-341-project1-wyys.onrender.com/contacts",
  schemes: ["https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/contacts.js"];

swaggerAutogen(outputFile, routes, doc);
