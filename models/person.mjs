//Creation of a Person Prototype
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const person = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods:[String]
});


const Person = process.env.MONGO_URI.model("Person",person);
module.exports = Person;