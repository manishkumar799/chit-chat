const express = require("express");

const Router = express.Router();
Router.get("/", async (res, req) => {
  res.send("Hello");
});
module.exports = Router;
