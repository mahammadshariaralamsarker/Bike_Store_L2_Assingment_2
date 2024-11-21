import { Bike } from "./bike.interface"
import { BikeModel } from "./bike.model"

const createBikeIntoDB= async(bike:Bike) => {
    const result = await BikeModel.create(bike)
    return result
}

export const BikeServices= {
    createBikeIntoDB
}