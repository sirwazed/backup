const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb://localhost:27017/testdb', () => {
    console.log("Database Connected");
});

async function createUser(){
    
    try{
        const user = await User.create({
            name: "Zaman",
            age: 26,
            email: "test@gmail.com",
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "Main St",
            }
            
        });
        console.log(user);
    }catch(e){
        console.log(e.message);
    }
    
}
//createUser();
run();

async function run(){
    try{
        const user = await User.findById("6276e4e34a18bc6619f108c0");
        await User.findByIdAndUpdate()
        console.log(user);
    }catch(err){
        console.log(err.message);
    }
}