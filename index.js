import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    console.log(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
    const {name ,password} = req.body;
    res.send(`You entered ${name} and ${password}`);
})

app.listen(3000,()=>{
    console.log("server is running");
})