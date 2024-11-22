import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import BikeSchemaZ from "./bike.validation";

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
    res.status(500).json({
      message: error.message || "Validation failed",
      success: false,
      error: error,
    });
    if (error) {
      console.log(error);
    }
  }
};
export const bikeController = {
  createBike,
};
