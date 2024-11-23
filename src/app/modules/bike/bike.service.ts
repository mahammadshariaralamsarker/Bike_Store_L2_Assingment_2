import { Bike } from "./bike.interface"
import { BikeModel } from "./bike.model"

const createBikeIntoDB= async(bike:Bike) => {
    const result = await BikeModel.create(bike)
    return result
}
const getBikeFromDB= async()=>{
    const result = await BikeModel.find()
    return result;
}
const getSingleBike = async(id:string)=>{
    const result = await BikeModel.findById(id)
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
    deleteBike,updateBike
}