const express = require('express');
const morgan = require("morgan");
const app = express();
const cors = require("cors");

require('dotenv').config()
app.use(morgan('dev'))


app.use(express.json())
app.use(cors({origin: '*'}));
app.get('/',(req,res) => {
    res.send('Servidor Rohstoffe equipo 5 Activo');
});

app.get('/api',(req,res)=>{
  res.send("Esto es un /api !!")
})

app.use("/api/", require("./router/inicio"))
app.use("/api/", require("./router/favoritos"))
app.use("/api/", require("./router/historial"))

app.set("puerto", 3000)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor Rohstoffe corriendo en el puerto ${app.get("puerto")}`)
})
