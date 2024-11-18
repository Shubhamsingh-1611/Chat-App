import express from "express"
import dotenv from "dotenv"
import DBConect from "./DB/app.js"
const app = express();
dotenv.config();
app.listen(process.env.PORT,()=>{
    DBConect();
console.log("working at port 3000");
})
app.get("/",(req,res)=>{
    res.send("working");
})