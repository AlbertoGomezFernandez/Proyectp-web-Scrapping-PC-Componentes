const laptopRouter = require("./src/api/routes/laptop.routes");
const { connectDB } = require("./src/config/db");
require("dotenv").config();
const express = require("express");


const app = express();
connectDB();

app.use("/api/laptops", laptopRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});