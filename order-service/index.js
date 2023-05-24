
class Order {
    static OrderNr = 1;
    id;
    username;
    product;
    constructor(username, product) {
        this.username = username;
        this.product = product;
        this.id = Order.OrderNr;
        Order.OrderNr++;
    }
}




const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())




let orderList = new Array();

orderList.push(new Order("MAKR", "Notebook"));
orderList.push(new Order("MAKR", "Test"));
orderList.push(new Order("MISA", "Graphics Card"));



app.get('/orders/:username', (req, res) => {
    let username = req.params.username;
    let userInDB = (orderList.filter(x => (x.username == username)));
    return res.status(200).send(JSON.stringify(userInDB));
});


app.post('/orders', (req, res) => {
    let username = req.query.username;
    let product = req.query.product;
    let newOrder = new Order(username, product);
    orderList.push(newOrder);
    console.log(orderList)
    return res.send('{"id": ' + newOrder.id + '}');
});

app.get('/orders', (req, res) => {
    let stringIDs = JSON.stringify(orderList.map(element => {
        let tempObject = {};
        tempObject['id'] = element.id;
        return tempObject;
    }));
    return res.send('' + stringIDs);
});


app.listen(9001, () => {
    console.log("Server listening on Port 9001");
});