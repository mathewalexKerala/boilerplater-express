let express = require('express');
let app = express();
app.use('/public',express.static(__dirname+'/public'))


app.get('/',function (req,res){
   
     res.sendFile(__dirname+'/views/index.html')

})

app.get('/json',function(){
     arguments[1].json({message:"Hello json"})
})






 module.exports = app;
