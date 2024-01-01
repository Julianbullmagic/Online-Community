const mongoose =require( 'mongoose')
const houseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number
})

module.exports=mongoose.model('House', houseSchema)
