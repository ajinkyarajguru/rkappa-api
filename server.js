var express = require('express');
var app = express();

app.use('/',(req, res) => {
    res.json({data: {message: 'Hello from JOSN'}})
})

app.listen(1337, ()=>{
    console.log('This is the server')
})
