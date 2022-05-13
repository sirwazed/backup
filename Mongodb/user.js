const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        lowercase: true,
        validate: {
            validator: v => v.includes("@gmail.com"),
            message: props => `${props.value} is not a valid email address`,
        }
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {
       type: mongoose.SchemaTypes.ObjectId,
       ref: "Users"
    },
    hobbies: [String],
    address: addressSchema
});

module.exports = mongoose.model("Users",userSchema);