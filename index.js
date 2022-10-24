const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000;

const productCollection = require("./Data/product.json")

app.get("/", (req, res) => {
    res.send("Now Server Is Running")
})

app.get("/allProducts", (req, res) => {
	res.send(productCollection);
});

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const getSingelItem = productCollection?.find(p => p.id == id);

    if (!getSingelItem) {
        res.send("Khuje pawa jay ni")
    }
    res.send(getSingelItem)
    // console.log(req.params.id)
})


app.get("/category/:name", (req, res) => {
    const name = req.params.name;

    const getCategory = productCollection?.filter(p => p.category == name)
    res.send(getCategory)
    console.log(name);
	// console.log('Hello category');
});

app.listen(Port, () => {
    console.log('Server is Running On Wesite', Port);
})

module.exports = app;

