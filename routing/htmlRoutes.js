const path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  // console.log("hello - home");
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  // console.log("hello - survey");
});

// app.get("/friends", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/friends.html"));
//   // console.log("hello - friends");
// });

};