const express = require('express');

const app = express();

// app.use((req,res,next) => {
//     console.log('Hello from Midware 1');
//     next();
// });

// app.use((req,res,next) => {
//     console.log('Hello from Midware 2');
//     res.send('<h1>Hello from Midware2 </h1>');
// });

app.use('/users',(req,res,next) => {
    res.send('<h1>Hello from "Users" page</h1>');
});

app.use('/',(req,res,next) => {
    res.send('<h1>Hello from "Default" pages</h1>');
});

app.listen(3000);