const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
port = 8000;
const handler = (req, res) => {
    res.send("Hello World!");
}
let users = [{
    "id": 1,
    "name": "Mirabel",
    "email": "mvandaalen0@newsvine.com",
}, {
    "id": 2,
    "name": "Erminia",
    "email": "ehammand1@uol.com.br",
}, {
    "id": 3,
    "name": "Padraig",
    "email": "pkaygill2@lycos.com",
}, {
    "id": 4,
    "name": "Bridie",
    "email": "bdavydychev3@lycos.com",
}, {
    "id": 5,
    "name": "Allister",
    "email": "aseel4@theglobeandmail.com",
}, {
    "id": 6,
    "name": "Bessy",
    "email": "bbradford5@sbwire.com",
}, {
    "id": 7,
    "name": "Elnar",
    "email": "echampagne6@nationalgeographic.com",
}, {
    "id": 8,
    "name": "Phylys",
    "email": "pfist7@delicious.com",
}, {
    "id": 9,
    "name": "Wilbur",
    "email": "whouseago8@wix.com",
}, {
    "id": 10,
    "name": "Gilemette",
    "email": "gbirtonshaw9@trellian.com",
}, {
    "id": 11,
    "name": "Leslie",
    "email": "lnisuisa@earthlink.net",
}, {
    "id": 12,
    "name": "Murvyn",
    "email": "mshapcottb@rakuten.co.jp",
}, {
    "id": 13,
    "name": "Hettie",
    "email": "hvischic@com.com",
}, {
    "id": 14,
    "name": "Edvard",
    "email": "esilverthornd@reddit.com",
}, {
    "id": 15,
    "name": "Abigail",
    "email": "aarrundalee@army.mil",
}, {
    "id": 16,
    "name": "Lothario",
    "email": "lcolerickf@samsung.com",
}, {
    "id": 17,
    "name": "Dill",
    "email": "dskeelsg@blinklist.com",
}, {
    "id": 18,
    "name": "Janean",
    "email": "jashpitalh@patch.com",
}, {
    "id": 19,
    "name": "Corrianne",
    "email": "cfortescuei@wordpress.org",
}, {
    "id": 20,
    "name": "Quinn",
    "email": "qgoaleyj@yellowpages.com",
}]
// get method
app.get("/", handler);

app.get("/users", (req, res) => {
    res.send(users)
})


app.get("/users/querytest", (req, res) => {
    console.log(req.query);
    const search = req.query?.search;
    if (search) {
        const result = users.filter(user => {
            const tmp = user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ||
                user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())

            return tmp;
        });
        res.send(result);
    }

})
app.get("/users/:id", (req, res) => {
    const tmpUser = users[req.params.id - 1]
    console.log(req.params.id);
    res.send(tmpUser)
})
/*-----------------------------*/
/*-------Post method----------*/
/*---------------------------*/
app.post("/users", (req, res) => {
    console.log("data in req body ", req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log("response: ", newUser);
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})