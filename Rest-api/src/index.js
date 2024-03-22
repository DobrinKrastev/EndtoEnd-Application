const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {authMiddleware} = require("./middlewares/authMiddleware")
const routes = require("./router")
const app= express();

app.use(cors());
app.use(express.json())
app.use(authMiddleware);

// app.use((req,res, next)=>{
//     res.header("Acces-Control-Allow-Origin","*");
//     next();
// })

app.use(routes)

mongoose.connect("mongodb://localhost:27017/book-libary")
.then(()=> console.log("DB Conncected"))
app.listen(3000, ()=> console.log("Server is listening on port  3000")) 