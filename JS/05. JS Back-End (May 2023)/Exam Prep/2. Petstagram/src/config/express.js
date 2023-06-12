const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("../middlewares/session");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(express.static(path.resolve(__dirname, "../static")));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session());
  app.use(trimBody());

  const hbs = handlebars.create({
    extname: ".hbs",
  });
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
  app.set("views", "src/views");
};
