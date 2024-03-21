const express = require("express");
const cors = require("cors");

const routes = require("./router")
const app= express();

app.use(cors());
app.use(express.json())

// app.use((req,res, next)=>{
//     res.header("Acces-Control-Allow-Origin","*");
//     next();
// })

app.use(routes)


app.listen(3000, ()=> console.log("Server is listening on port  3000")) 