import { Order } from "../order/order.interface"
import { Bike } from "./bike.interface"
import { BikeModel } from "./bike.model"

const createBikeIntoDB= async(bike:Bike) => {
    const createBike = await BikeModel.create(bike)
    return createBike
}
const getBikeFromDB= async()=>{
    const result = await BikeModel.find()
    return result;
}
const getSingleBike = async(id:string)=>{
    const result = await BikeModel.findById(id)
    return result
}
// get single bike by name 
const getSingleBikeByQuery = async(name:string)=>{
    const result = await BikeModel.findOne({name})
    return result
}
const deleteBike = async (id:string)=>{
    const result = BikeModel.findByIdAndDelete(id)
    return result;
}
const updateBike  = async (id:string, Updateddata:Bike)=>{
    const result = BikeModel.findByIdAndUpdate(id,Updateddata,{new:true})
    return result
}

export const BikeServices= {
    createBikeIntoDB,
    getBikeFromDB,
    getSingleBike,
    deleteBike,updateBike,getSingleBikeByQuery
}