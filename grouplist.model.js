const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
  fullname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  track: {type: String,required: false,unique: false,trim: false,minlength: 0},
  phone: {type: String,required: false,unique: false,trim: false,minlength: 0},
  creditunit: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_name: {type: String,required: false,unique: false,trim: false,minlength: 0},
  group_key: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Grouplist = mongoose.model("Grouplist",UserSchema)

module.exports = Grouplist;


