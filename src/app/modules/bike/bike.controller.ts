import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async (req:Request, res:Response)=>{
    try {
        const bike = req.body
        const result =await BikeServices.createBikeIntoDB(bike)
        res.status(200).json({
            success:true,
            message:"Bike created successfully",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })
    }
}
export const bikeController = {
    createBike
}