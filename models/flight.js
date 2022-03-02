import mongoose from "mongoose";

//optional shortcut to mongoose.Schema class

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  name: String,
  seat: {type: String, match: /[A-F][1-9]\d?/}
},{
  timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departureDate: Date,
    dapartureTime: Number,
    flightRisk: String,
    destination: String,
    onTime: Boolean,
    
    tickets: [ticketSchema],
    meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}],},
    {
      timestamps: true
})



//Compile flights schema into a model and then export it
const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}