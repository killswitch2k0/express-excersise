const http = require('http');

//creates http server
const server = http.createServer(onRequest); 

//listen on port
const listen = server.listen(3344, () => {console.log("App is running on port 3344")});

function onRequest (req, res) {
    console.log("check the webpage, then send GET with postman.")
    res.setHeader("myheader", "value");
    res.statusCode = 404;
    //displays result and closes the conenction
    res.end('thanks')
}