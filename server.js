//source: https://www.youtube.com/watch?v=SccSCuHhOw0&list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY&index=11
//In the app.js file I created a super basic local web server, now I use express library instead.

const express = require("express");
const app = express(); //this instruction creates an application to set up the server

// app.set("view engine", "ejs"); //not working..

app.get("/", function(req, res){
    console.log("Server is listening on port 3000");
    res.send("Hello! This is server speaking! How can I help?");
    // //rendering HTML in the browser - des not work
    // res.render("index")
});

app.listen(3000);
