import mongoose from "mongoose";

//optional shortcut to mongoose.Schema class

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departureDate: Date,
    dapartureTime: Number,
    flightRisk: String,
    destination: String,
    onTime: Boolean,
})

//Compile flights schema into a model and then export it
const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}