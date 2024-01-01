const mongoose =require( 'mongoose')
const wheatSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  contains:String,
  x:Number,
  y:Number
})

module.exports=mongoose.model('Wheat', wheatSchema)
