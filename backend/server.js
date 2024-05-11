const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const session = require("express-session");
const cors = require('cors')

dotenv.config({path : '../.env'})
connectDB();
const app = express();

app.use(cors({
  origin : ["*"],
  methods :["POST","GET"],
  credentials:true
}));

app.use(express.json());

app.use("/api/user", userRoutes);


const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);

module.exports = app
