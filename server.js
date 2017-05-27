// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.use(express.static(process.cwd() + "/public"));

app.use(methodOverride("_method"));

//set handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers_controller.js")

app.use("/", routes(app));

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});