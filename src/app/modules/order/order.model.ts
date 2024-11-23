import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const ordersSchema = new Schema<Order>({
        email:{
            type:String,
            required:true,
            unique:true
        },
        product:{
            type:String,
            required:true,
        },
        totalPrice:{
            type:Number,
            required:true,
        },
    },
    {
        timestamps:true
    }
)

export const OrderModel = model<Order>("Order",ordersSchema)