const mongoose =require( 'mongoose')
const dragonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  x:Number,
  y:Number,
  incr:0,
  mode:String,
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
module.exports=mongoose.model('Dragon', dragonSchema)
