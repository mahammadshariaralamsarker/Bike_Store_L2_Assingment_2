import { Order } from "./order.interface";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
      const order = req.body;
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

  export const OrderController = {
    createOrder
  }