const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/contacts", require("./routes/contacts"));

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

startServer();
