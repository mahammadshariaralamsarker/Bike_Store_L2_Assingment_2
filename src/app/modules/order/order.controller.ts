import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { BikeModel } from "../bike/bike.model";
const createOrder = async (req: Request, res: Response)=> {
  try {
    const order = req.body;

    // Validate order data
    if (!order || !order.quantity || !order.product) {
      return res.status(400).json({
        message: "Invalid order data. Ensure product and quantity are provided.",
        success: false,
      });
    }

    const orderQuantity = order.quantity;
    const id = order.product
    // const id = '6742c590556a6e3a49b6c760'; // Hardcoded product ID

    // Check if the product exists in the database
    const findData = await BikeModel.findById(id);
    if (!findData) {
      // If the product doesn't exist, create the order anyway
      const result = await OrderService.createOrderIntoDB(order);
      return res.status(200).json({
        message: "Order created successfully.",
        success: true,
        data: result,
      });
    }

    const findDataQuantity = findData.quantity;

    // Check if there is enough stock
    if (findDataQuantity >= orderQuantity) {
      const remainingQuantity = findDataQuantity - orderQuantity;
      const inStock = remainingQuantity > 0;

      // Update the product's quantity and inStock status
      await BikeModel.findByIdAndUpdate(
        id,
        { quantity: remainingQuantity, inStock },
        { new: true } // Return the updated document
      );

      // Create the order in the database
      const result = await OrderService.createOrderIntoDB(order);

      // Return a success response
      return res.status(200).json({
        message: "Order created successfully.",
        success: true,
        data: result,
      });
    } else {
      // Insufficient stock case
      return res.status(400).json({
        message: `Insufficient stock available.`,
        success: false,
      });
    }
  } catch (error: any) {
    console.error(error);

    // Handle unexpected errors
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error.message || error,
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