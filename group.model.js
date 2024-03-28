const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
  admin: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_name: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_description: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_type: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_key: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Group = mongoose.model("Group",UserSchema)

module.exports = Group;


