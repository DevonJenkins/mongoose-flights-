
import { Flight } from "../models/flight.js"

function newFlight(req,res){
  res.render('flights/new')
  title: "Add Flight"
}

function create(req, res){
//convert delayed checkbox of null or "on" to boolean
req.body.onTime = !!req.body.onTime 
//replace and split it if its not an empty string


const flight = new Flight(req.body)
console.log(flight)
flight.save(function(err){
  if (err) return res.render('flights/new')

  res.redirect('/flights')
})
}

function index(req, res){
  Flight.find({}, function(error, flights){
    console.log(error)
    res.render("flights/index",{
      error: error,
      flights: flights,
      title: "All Flights"
    })
  })
}

export {
  newFlight as new,
  create,
  index,
}