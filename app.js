const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const flash = require("connect-flash");
const passport = require("passport");
const expressSession = require("express-session");
//const expressValidator = require('express-validator');
const bcrypt = require("bcrypt");
const request = require("request");

//mongoose.Promise = global.Promise
//mongoose.connect("mongodb://ruraldev:ruraldev@ds125578.mlab.com:25578/rural-development");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//let models_path =  './models';
//app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/registerpro", function(req, res) {
  res.render("registerpro.ejs");
});

app.get("/registerdev", function(req, res) {
  res.render("registerdev.ejs");
});

app.get("/dashboarddev", function(req, res) {
  res.render("dashboarddev.ejs");
});

app.get("/chat", function(req, res) {
  res.render("chat.ejs");
});

app.get("/", function(req, res) {
  res.render("login.ejs");
});

app.listen(3000);
