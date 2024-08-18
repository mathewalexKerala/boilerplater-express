let express = require('express');
let app = express();

app.get('/',function (req,res){
    res.sendFile(__dirname+'/view/index.html')
})



































 module.exports = app;
