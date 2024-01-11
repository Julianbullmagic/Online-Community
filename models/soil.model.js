const mongoose =require( 'mongoose')
const bearSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  incr:0,
})
module.exports=mongoose.model('Bear', bearSchema)
