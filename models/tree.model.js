const mongoose =require( 'mongoose')
const treeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  choppedness:Number,
  fruit:String,
  x:Number,
  y:Number
})

module.exports=mongoose.model('Tree', treeSchema)
