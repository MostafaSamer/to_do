const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const controll = require('./controller/controll');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./views'));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "sh",
    saveUninitialized: true,
    resave: true
}))

controll(app);

app.listen(8000, () => {
    console.log("Server is running in port 8000");
});
