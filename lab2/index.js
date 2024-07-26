const express = require('express');
const path = require("path"); // needed when setting up static/file paths

const router = require("./modules/menuLinks/router");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// set up application template engine
app.set("views", path.join(__dirname, "views"));//the first views is the setting name
app.set("view engine", "pug");

// set up  folder for static files
app.use(express.static(path.join(__dirname, "public")));

app.use('/', router);

// set up server listing
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

