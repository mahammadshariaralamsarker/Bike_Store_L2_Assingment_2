import { model, Schema } from "mongoose";
import { Bike } from "./bike.interface";

const bikeSchema = new Schema<Bike>({
  name: {
    type: String,
    required: true,
  },
  brand:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
//   use enum
  category:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  quantity:{
    type:Number,
    required:true
  },
  inStock:{
    type:Boolean,
    required:true
  }
});

export const BikeModel = model<Bike>('Bike',bikeSchema)