
class User {
    static UserIdCount = 1;
    id;
    username;
    name;
    constructor(username, name) {
        this.username = username;
        this.name = name;
        this.id = User.UserIdCount;
        User.UserIdCount++;
    }
}




const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())




let userList = new Array();

userList.push(new User("MAKR", "Matthias Kroiss"));
userList.push(new User("MISA", "Samuel Mittermair"));



app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    let userInDB = (userList.find(x => (x.username == username)));
    return res.status(200).send(JSON.stringify(userInDB));
});


app.post('/users', (req, res) => {
    let username = req.query.username;
    let name = req.query.name;
    let newUser = new User(username, name);
    userList.push(newUser);
    return res.send('{"id": ' + newUser.id + '}');
});

app.get('/users', (req, res) => {
    let stringIDs = JSON.stringify(userList.map(element => {
        let tempObject = {};
        tempObject['id'] = element.id;
        return tempObject;
    }));
    return res.send('' + stringIDs);
});


app.listen(9000, () => {
    console.log("Server listening on Port 9000");
});