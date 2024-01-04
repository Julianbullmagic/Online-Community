const mongoose =require( 'mongoose')
const collectiveInventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wood:Number,
  ironore:Number,
  copperore:Number,
  steelbar:Number,
  copperbar:Number,
  stone:Number,
  rawfish:Number,
  cookedfish:Number,
  medicinalherbs:Number,
  wheat:Number,
  hammers:Number,
  swords:Number,
  axes:Number,
  pickaxes:Number,
  fishingrods:Number,
  spades:Number,
  apples:Number,
  oranges:Number,
  appleseeds:Number,
  orangeseeds:Number,
  bread:Number,
  rawchicken:Number,
  cookedchicken:Number,
  rawbeef:Number,
  cookedbeef:Number,

})

module.exports=mongoose.model('Collectiveinventory', collectiveInventorySchema)
