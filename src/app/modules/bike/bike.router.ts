import express from 'express'
import { bikeController } from './bike.controller'


const router = express.Router()

router.post('/products',bikeController.createBike)
// get single Bike by query
router.get('/products?searchTerm=name',bikeController.getSingleBikeByQuery)

router.get('/products/:productId',bikeController.getSingleBike)
router.get('/products',bikeController.getBike)
router.delete('/products/:productId',bikeController.deleteBike)
router.put('/products/:productId',bikeController.updateBike)


export const bikeRoutes = router;