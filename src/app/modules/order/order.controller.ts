
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { BikeModel } from "../bike/bike.model";
import { BikeServices } from "../bike/bike.service";
import { bikeController } from "../bike/bike.controller";

const createOrder = async (req:Request, res:Response) => {
    try {
      const order = req.body;
      const findData = await BikeModel.findById(order.product)
      const result = await OrderService.createOrderIntoDB(order);
      res.status(200).json({
        message: "order created successfully",
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.log(error);
      res.status(404).send({
        message:"Validation failed",
        success: false,
        error,
      });
      
    }
  };

  const getOrder = async (req:Request,res:Response)=>{
    try {
      const result = await OrderService.getOrderFromDB();
      const taka = result.reduce((total, order) => total + order.totalPrice, 0)
      res.status(200).json({
        message: "Revenue calculated successfully",
        success: true,
        data:{
          totalRevenue:taka,
        }
        
      });
    } catch (error: any) {
      console.log(error);
      res.status(404).send({
        message:"Validation failed",
        success: false,
        error,
      });
      
    }
  }

  export const OrderController = {
    createOrder,
    getOrder
  }