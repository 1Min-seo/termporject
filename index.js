let express=require("express")
let app=express()
app.use(express.static("public"))

const path=require('path');
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/','main.html'))
})

app.get('/chat',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/','chat.html'));
}); 

app.post('/auth',(req,res)=>{
    //work backend 
    res.redirect('/chat');
});


app.listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273')
})