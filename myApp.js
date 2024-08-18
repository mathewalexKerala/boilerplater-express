let express = require('express');
let app = express();
require('dotenv').config()
app.use('/public',express.static(__dirname+'/public'))


app.get('/',function (req,res){
   
     res.sendFile(__dirname+'/views/index.html')

})

app.get('/json',function(){
   const MESSAGE_STYLE =  process.env.MESSAGE_STYLE ===process.env.MESSAGE_STYLE.toUpperCase()? process.env.MESSAGE_STYLE:process.env.MESSAGE_STYLE.toUpperCase()
     
     arguments[1].json({message:MESSAGE_STYLE})
})






 module.exports = app;
