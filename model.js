const { Schema, model } = require("mongoose");

const studentSChema = new Schema({
    name: String,
    email: String,
   age : Number
});

const studentModel = model("studentModel", studentSChema);
module.exports = studentModel;
