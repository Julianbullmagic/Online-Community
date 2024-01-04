const mongoose =require( 'mongoose')
const chickenSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  health:Number
})
module.exports=mongoose.model('Chicken', chickenSchema)
