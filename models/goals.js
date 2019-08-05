const mongoose = require ('mongoose');

const Schema= mongoose.Schema;

const GoalSchema = new Schema({
  title:{type:String},
  motive:{type:String},
  date:{type:Date}


});

const Goal = mongoose.model('goal', GoalSchema);
module.exports= Goal;
