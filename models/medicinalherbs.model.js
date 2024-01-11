const mongoose =require( 'mongoose')
const medicinalHerbsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  health:Number,
  hasseeds:Boolean,
  countdowntoreplenish:Number,
  x:Number,
  y:Number
})

module.exports=mongoose.model('MedicinalHerbs', medicinalHerbsSchema)
