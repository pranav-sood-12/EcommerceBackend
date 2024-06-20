// It is from simple node js
// const http = require('http');

// const app = http.createServer((req,res)=>{
//     if(req.url === "/")
//     {
//         res.end("<h1>Home Page</h1>")
//     }
//     else
//     {
//         res.end("<h1>Page Not Found</h1>")
//     }
// })

import express from 'express';
import {APP_PORT} from './config/index.js'
import routes from './routes/index.js'

const app = express();

// it is to register routes
app.use('/api',routes);

app.get("/",(req,res)=>{
    res.end("hi");
})


app.listen(5000,()=>console.log(`server is listening at port ${APP_PORT}`))

console.log("hello");



