const mongoose =require( 'mongoose')
const collectiveInventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wood:Number,
  ironore:Number,
  copperore:Number,
  steelbar:Number,
  copperbar:Number,
  stone:Number,
  fish:Number,
  grain:Number,
  hammers:Numbers,
  swords:Number,
  axes:Number,
  pickaxes:Number,
  fishingrods:Number,
  spade:Number,
  apples:Number,
  oranges:Number,
  bannanas:Number,
  bread:Number,
  chicken:Number,
  beef:Number,
})

module.exports=mongoose.model('Collectiveinventory', collectiveInventorySchema)
