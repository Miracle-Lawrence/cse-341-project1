const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/contacts", require("./routes/contacts"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

startServer();
