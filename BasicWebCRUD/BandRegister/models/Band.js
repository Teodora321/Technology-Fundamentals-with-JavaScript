const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  name:{type:String,required: true },
  age:{type:Number,required:true},
  honorarium:{type:Number, required:true},
  genre:{type:String,required:true}
});

const Band = mongoose.model('Band', bandSchema);
module.exports = Band;