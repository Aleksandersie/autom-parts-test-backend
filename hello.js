const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./dbConnection/dbConnection");
const models = require("./dbModels/dbModels");
const cors = require("cors");
const itemRouter = require('./routers/itemRouter')

app.use(cors());
app.use(express.json());

app.use("/api", itemRouter)

async function start() {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
    } catch (e) {
      console.log(e);
    }
  }

app.listen(process.env.APP_PORT, process.env.APP_IP);
app.listen((err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(
    `server is listening ${process.env.APP_IP},${process.env.APP_PORT}`
  );
});

start()