import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const bike = req.body;
    const result = await BikeServices.createBikeIntoDB(bike);
    res.status(200).json({
      message: "Bike created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.send({
      message:"Validation failed",
      success: false,
      result:error,
    });
    
  }
};
const getBike = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.getBikeFromDB();
    res.send({
      message: "Bike Received successfully",
      success: true,
      result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
};
const getSingleBike = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BikeServices.getSingleBike(id);
  try {
    res.send({
      message: "Single Bike Received successfully",
      success: true,
      result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
};
const deleteBike = async (req:Request, res:Response)=>{
  const id = req.params.id;
  const result = await BikeServices.deleteBike(id)
  try {
    res.send({
      message: "Single Bike Deleted successfully",
        success: true,
        
    })
  } catch (error:any) {
    res.status(500).json({
      message: error.message,
      success: false,
      error,
  })
}
}
const updateBike= async(req:Request, res:Response)=>{
  const id = req.params.id
  const updatedData = req.body;
  const result = await BikeServices.updateBike(id,updatedData)
  
    try{
      res.send({
        success:true,
        message:"updated data successfull",
        result
      })
    }
   catch (error:any) {
    res.status(500).json({
      success:false,
      message:error.message,
      error
    })
   }
}
export const bikeController = {
  createBike,
  getBike,
  getSingleBike,deleteBike,updateBike
};
