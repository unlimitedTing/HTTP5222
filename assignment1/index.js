const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const dotenv = require("dotenv");

//load the environment variables from .env
dotenv.config();

const router = require("./modules/router");

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse request body
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
