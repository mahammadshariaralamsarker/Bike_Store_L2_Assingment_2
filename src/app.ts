import express, { Application } from 'express' 
import cors from 'cors'
import { bikeRoutes } from './app/modules/bike/bike.router'
const app:Application = express()

// Parser
app.use(express.json())
app.use(cors())


app.use('/api/v1/bike',bikeRoutes)

export default app
