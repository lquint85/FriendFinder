//* Dependencies
//* =============================================================
const path = require('path');
const express = require("express");



//* Sets up the Express App
//* =============================================================
const app = express();
const PORT = process.env.PORT || 8000;



//* Sets up Express for static files
//* =============================================================
app.use(express.static('app/public'));



//* Sets up the Express app to handle data parsing
//* =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//* Defining Routes
//* =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



//* Starts the server to begin listening
//* =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });