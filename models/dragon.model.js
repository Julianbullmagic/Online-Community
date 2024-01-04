const mongoose =require( 'mongoose')
const dragonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  health:Number
})
module.exports=mongoose.model('Dragon', dragonSchema)
