import express from "express";
const app = express();
const port = 3000;

app.get("/", (req , res) =>{
   res.send("<h1>Hello</h1>");
});

app.get("/about",(req , res)=>{
   res.send("<h1>About Page</h1><p>My Name is Merin Wilson.</p>");
});

app.get("/contact",(req , res)=>{
    res.send("<h1>Contact Page</h1><p>My Phone: 23456789</p>");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});