const mongoose =require( 'mongoose')
const rockSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  minedness:Number,
  contains:String,
  x:Number,
  y:Number,
  type:String
})

module.exports=mongoose.model('Rock', rockSchema)
