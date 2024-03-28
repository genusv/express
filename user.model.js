const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
  fullname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  password: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  phone: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Account: {type: String,required: false,unique: false,trim: false,minlength: 0},
  creditunit: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Stattus: {type: String,required: false,unique: false,trim: false,minlength: 0},
  code: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const User = mongoose.model("User",UserSchema)

module.exports = User;


