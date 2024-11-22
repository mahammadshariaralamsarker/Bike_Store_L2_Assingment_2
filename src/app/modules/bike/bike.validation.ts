import { z } from "zod";

export const BikeSchemaZ = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.string(),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    required_error: "Category is required",
    invalid_type_error:
      "Category must be one of 'Mountain', 'Road', 'Hybrid', 'Electric'",
  }),
  description: z.string().optional(),
  quantity: z
    .number()
    .int()
    .nonnegative("Quantity must be a non-negative integer"),
  inStock: z.boolean(),
});

export default BikeSchemaZ;
