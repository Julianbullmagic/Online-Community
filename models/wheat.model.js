const mongoose =require( 'mongoose')
const wheatSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  health:Number,
  hasseeds:Boolean,
  countdowntoreplenish:Number,
  y:Number
})
module.exports=mongoose.model('Wheat', wheatSchema)
