const mongoose =require( 'mongoose')
const spiderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  health:Number
})
module.exports=mongoose.model('Spider', spiderSchema)
