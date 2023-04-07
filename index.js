const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index");
});

function auth(req, res, next) {
  if (((req.username = "admin"), (req.con = "admin11222333"))) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/");
  }
}
app.post("/login", (req, res) => {
  const enter = req.username;
  if (((req.username = "admin"), (req.con = "admin11222333"))) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/");
  }
});

app.get("/dashboard", auth, (req, res) => {
  res.render("dashboard");
});

app.listen(3000);
