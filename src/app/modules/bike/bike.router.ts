import express from 'express'
import { bikeController } from './bike.controller'


const router = express.Router()

router.post('/products',bikeController.createBike)

export const bikeRoutes = router;