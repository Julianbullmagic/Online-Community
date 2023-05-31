const mongoose =require( 'mongoose')
const PageViewSchema = new mongoose.Schema({
  name:{ type: String, default: "pageviews" },
  sovietunion:{ type: Number, default: 0 },
  china:{ type: Number, default: 0 },
  cuba:{ type: Number, default: 0 },
  democracy:{ type: Number, default: 0 },
  psychologicalwar:{ type: Number, default: 0 },
  home:{ type: Number, default: 0 },
  info:{ type: Number, default: 0 },
  yugoslavia: { type: Number, default: 0 }
})

module.exports=mongoose.model('pageviews', PageViewSchema)
