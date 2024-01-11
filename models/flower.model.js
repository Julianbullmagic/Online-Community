const mongoose =require( 'mongoose')
const flowerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  contains:String,
  health:Number,
  x:Number,
  y:Number,
  hasseeds:Boolean,
  countdowntoreplenish:Number,
  colour:String
})

module.exports=mongoose.model('flower',flowerSchema)
