const fs = require('fs');

const requestHandler = (req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;//parsing the url
    const method = req.method; //getting the method
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Msg</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();//returning here exits from the further execution of code below which is not for this URL but another URL.
        //Hence once we open '/' url, we get this button "send" & input field.
        //Once we click on the 'send' button, the code in if() block stops running and then goes to the url '/message' and hence the server there performs the code as given below.
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {//Eventlisteners
            console.log(chunk);
            body.push(chunk);
        });//the data event will be fired whenever a new chunk is ready to be read

        return req.on('end', () => { //Return this eventlistner to exit from implementing the code below this block & giving error //EventListeners and takes some time & hence writeFileSync must be moved into this to execute after this is done.
            const parsedBody = Buffer.concat(body).toString();//here .concat is static method of the Buffer class. Creates a new buffer and needs to be converted to string using toString() as we know the incoming data is text.
            // console.log(parsedBody); returns message=<text entered in the input field>
            const message = parsedBody.split('=')[1];//getting the msg only
            // fs.writeFileSync('message.txt', message);//This block of code must be moved into the eventListener,if not code first implements the writeFileSync before even getting the message.
            fs.writeFile('message.txt', message, (err) => { //Asynchronously executes the call back 3rd arg when the writing is done & not blocks incoming requests
                // res.writeHead(302,{});//allows us to write some meta info in one go. redirection code=302 & setting headers.
                res.statusCode = 302; //redirection
                res.setHeader('Location', '/');
                return res.end();
            });
        });//this Block i.e, 'end' event will be fired once its done parsing the incoming data/incoming request in general
    }
    res.setHeader('Content-Type', 'text/html'); //setting the headers that the browser understands & requires to process the response.Here we are telling the browser that the response is Html/text
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();//To tell the server that the response is done & we should'nt write after this, we return the response to the client .
};

// module.exports = requestHandler;
exports = requestHandler;

