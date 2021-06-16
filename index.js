const express = require ("express");

const app = express();

const bag = {name:"nike air", price: "$30"}
const sportswear = {name:"vintage puma", price: "$30"}
const sneakers= {name:"reebok fury", price: "$30"}

app.get ("/",(req,res) => {
    res.send ("Welcome to awesome sports boutique")
})

app.get ("/bags", (req,res) => {
    res.json (bag)
})



app.listen (3000, () => console.log ("server running") )