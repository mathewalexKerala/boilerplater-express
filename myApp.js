let express = require('express');
let app = express();

app.get('/',function (req,res){
     res.sendFile(__dirname+'\views\index.html')
    console.log('__dirname',__dirname)
})



































 module.exports = app;
