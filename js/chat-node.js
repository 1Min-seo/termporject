const express=require("express")
const bodyParser=require("body-parser");
const { response } = require("express");
const app=express()
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))

// let data={"name":name.value, "msg": inputText.value}

let message=[];

app.post("/sendMessage",function(req, res){
    console.log(data)
    let data=req.body;


    message.push(data)
    response.send(messages.length.toString())
})

app.post("/getNewMessages",function(req, res){
    console.log(req.body)
    let data= Number(req.body);
    let resultData=[];
    if(messages.legnth > data){
        for(let i=data; i<messages.legnth; i++)
            resultData.push(messages[i].msg)
    }

    response.send(JSON.stringify(desultData))
})


app.listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273/chat')
})