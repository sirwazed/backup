const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const mongodbSession = require('connect-mongodb-session')(session);
const app = express();
const mongoURL = "mongodb://localhost:27017/sessions";


mongoose.connect(mongoURL,
{  useNewUrlParser: true
}).then((res)=>{
    console.log("Mongodb Connected");
});

const store = new mongodbSession({
    uri: mongoURL,
    collection: "mySessions",
})


const PORT = 3000;

app.use(session({
    secret: "key that will sign cookies",
    resave: false,
    saveUninitialized: false,
    store: store,
}));

app.get('/',(req, res) => {
    req.session.isAuth = true;
    res.send("Youre in home");
})

app.listen(PORT, console.log(`Server running at port: http://localhost:${PORT}/`));