const express = require("express");
const app = express();
app.get("/", (req,res) => {
    res.send("Hola mundo");
});
app.listen(80, () => {
    console.log("Nos hemos conectado correctamente");
});