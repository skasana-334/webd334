const express= require("express");
const app=express()
app.get("/",function(req,res){
    //sendfile use to get response from a web by giving file name(responding request with html files)
    res.sendFile(__dirname+"/index.html")//we can give index.html but it will not run in anoter computer so to get it we give dir name
})
app.listen(3000,function(){
    console.log("server starts");
})