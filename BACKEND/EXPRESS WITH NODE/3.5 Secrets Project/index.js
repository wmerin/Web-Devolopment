import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended:true}));

var usercCrrct=false;

function passwordChecker(req,tes,next){
    const pwd=req.body["password"];
    if(pwd=="ILoveProgramming"){
        usercCrrct=true;
    }
    else{
        usercCrrct=false;
    }
    next();
}

app.use(passwordChecker);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(usercCrrct==true){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});