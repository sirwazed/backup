const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const requireAuth = (req,res,next) => {
    const token = req.cookies.jwt;

    // check jwt exists & is verified
    if(token){
        jwt.verify(token, 'net ninja secret', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}

// check current user

const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, 'net ninja secret', async (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else{
                console.log(decodedToken);
                let user = Users.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }
    else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUser};