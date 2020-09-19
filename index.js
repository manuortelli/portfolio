const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(cors());


//este es el puerto varible
const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");
const studies = require("./JSON/Studies.json")

app.get('/', (req,res) => {
    res.send("Hola, buenas tardes");
});

app.get('/about', (req,res) => {
    res.json(about);
});

app.get('/portfolio', (req,res) => {
    res.json(portfolio);
});

app.get('/studies', (req,res) =>  {
    res.json(studies);
});


app.listen(port, () => {
    console.log(`Server on: ${port}`)
})


