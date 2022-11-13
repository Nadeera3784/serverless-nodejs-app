const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "default routes",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});


app.get("/me", (req, res, next) => {
  return res.status(200).json({
    message: "Me john!",
  });
});


module.exports.handler = serverless(app);
