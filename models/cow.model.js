const mongoose =require( 'mongoose')
const cowSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  mode:String,
  incr:0,
  updatex:Number,
  updatey:Number,
  newx:Number,
  newy:Number,
  oldx:Number,
  oldy:Number,
  xdistlerp:Number,
  ydistlerp:Number,
  attackupdatex:Number,
  attackupdatey:Number,
  health:Number
})
module.exports=mongoose.model('Cow', cowSchema)
