import { model, Schema } from "mongoose";
import { Bike, BikeCategory } from "./bike.interface";

const bikeSchema = new Schema<Bike>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      validate: {
        validator: function (this: Bike, v: number) {
          return v > 0;
        },
        message: (props) => `${props.path} must be a positive number`,
      },
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(BikeCategory)
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { 
    timestamps: true 
  });

export const BikeModel = model<Bike>("Bike", bikeSchema);
