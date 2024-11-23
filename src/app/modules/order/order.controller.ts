
import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req:Request, res:Response) => {
    try {
      const order = req.body;
      delete order.quantity;
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