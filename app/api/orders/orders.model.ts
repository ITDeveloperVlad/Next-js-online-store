export interface Order {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export interface OrderInfo {
  page: number;
  amount: number;
  total: number;
  products: Order[];
}
