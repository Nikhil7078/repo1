const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//public static path 
const static_path =  path.join( __dirname ,"../public");

console.log(static_path);

app.set('view engine' ,'hbs');
app.use(express.static(static_path));


//Routing
//app.get(route,callback)

app.get("",(req,res) =>{
     res.render('index');
})
 
app.get("/about",(req,res) =>{
    res.render('about');
})

app.get("/weather",(req,res) =>{
    res.render('weather');
})

app.get("*",(req,res) =>{
    res.send("this is error page");
})
  
app.listen(port,() => {
   console.log(`listening at port ${port}`)
});
