export enum BikeCategory {
  Mountain = 'Mountain',
  Road = 'Road',
  Hybrid = 'Hybrid',
  Electric = 'Electric'
}
export interface Bike {
    name: string;
    brand: string;
    price: string;
    category: BikeCategory;
    description: string;
    quantity: number;
    inStock: boolean;    
  }
