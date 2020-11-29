const fs = require('fs');

const requesthandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>input page</title></head>');
        res.write('<body><h1>Welcome to NodeJs</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="name"><button type="submit">username</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>UsersPage</title></head>');
        res.write('<body><ul><li>USER 1</li><li>USER 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',() => {
            const text = Buffer.concat(body).toString();
            const message = text.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location','/create-user');
        return res.end();
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Create-User</title></head>');
    res.write('<body><h1>Create-User Page</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requesthandler;