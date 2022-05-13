const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { cookie } = require('express/lib/response');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://hasan120:hasan120@cluster0.nci4p.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) =>{
  app.listen(3000) 
  console.log("Connected");})
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use('/',authRoute);

// cookies

// app.get('/set-cookies', (req,res) => {
//   //res.setHeader('Set-Cookie', 'newUser=false');
//   res.cookie('newUser', false);
//   res.cookie('isEmployee', true, {maxAge: 1000*60*60*24});
//   res.send('you got the cookies');
// })

// app.get('/read-cookies', (req,res) => {
//   const cookies = req.cookies;
//   console.log(cookies);

//   res.json(cookies);
// })