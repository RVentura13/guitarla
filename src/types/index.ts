export type GuitarTypes = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = GuitarTypes & {
  quantity: number;
};
