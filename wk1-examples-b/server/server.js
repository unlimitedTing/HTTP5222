const http = require("node:http"); //import the "http" module
//import http from "node:http"; //if server.mjs

const port = process.env.PORT || 3000; //set the port # to 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200; //Status code 200 = OK
  res.setHeader("Content-Type", "text/html"); //send header to indicate that the content sent from server is HTML
  res.end("<h1>Hello, World!</h1><p>Hello, again.</p>"); //send HTML content and end
});

server.listen(port, () => {
  //The backticks (` ... `) is a template literal format allowing you
  //to use variables directly in the string via ${my_var_name}.
  console.log(`Server running at port http://localhost:${port}`);
});

//To run, use the CLI (whether Terminal or Powershell, etc) using:
//> node server.js
//You can open a terminal directly within VSCode by going to the Terminal
//menu above.