const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.render("index"));

// route to demonstrate EJS rendering a static HTML file
indexRouter.get("/raw-html", (req, res) => res.render("raw-html"));


module.exports = indexRouter;
