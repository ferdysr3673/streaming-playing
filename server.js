const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("RPC SUDAH AKTIF!")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Ready! ( FerdySr )")});
}
module.exports = keepAlive