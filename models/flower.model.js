const mongoose =require( 'mongoose')
const flowerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  contains:String,
  x:Number,
  y:Number,
  colour:String
})

module.exports=mongoose.model('flower',flowerSchema)
