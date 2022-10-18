//SET UP A LOCAL WEB SERVER
//source: https://www.youtube.com/watch?v=VShtPwEkDD0
const http = require("http"); //import the http library inside the http variable 
const port = 3000; //this is a variable that contains the server's port that will listen
const fs = require("fs"); //library that help render html on browser

//create the local server
const server = http.createServer(function(req, res){
    //what server does on the browser
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", function(error, data){
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Found!");
        } else {
            res.write(data);
        }
        res.end();
    });
    res.write("Hello node!");
    res.end();
});

//make the server listen
server.listen(port, function(error){
    if (error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + port);
    }
})