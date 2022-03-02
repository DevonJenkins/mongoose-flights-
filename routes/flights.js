import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()



router.get('/', flightsCtrl.index)
//Get flights/new
router.get('/new', flightsCtrl.new)
//POST /flights
router.get('/:id', flightsCtrl.show)

router.post('/', flightsCtrl.create)
router.post('/:id/:tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addToMenu)

router.delete("/:id", flightsCtrl.delete)






export {
  router
}
