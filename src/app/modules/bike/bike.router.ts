import express from 'express'
import { bikeController } from './bike.controller'


const router = express.Router()

router.post('/products',bikeController.createBike)
router.get('/products/:id',bikeController.getSingleBike)
router.get('/',bikeController.getBike)
router.delete('/products/:id',bikeController.deleteBike)
router.put('/products/:productId',bikeController.updateBike)


export const bikeRoutes = router;