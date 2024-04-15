import { API_URL, DEFAULT_HEADERS } from "../constants/configConstants";
import { OrderInfo } from "./orders.model";

const URL = API_URL + "products";

const ordersApi = {
  fetchOrders: async (
    page: number,
    pageSize: number
  ): Promise<OrderInfo | null> => {
    try {
      const response = await fetch(
        `${URL}?page=${page}&page_size=${pageSize}`,
        {
          headers: DEFAULT_HEADERS,
        }
      );

      const data = await response.json();

      return data;
    } catch (e: any) {
      console.error("error orders", e);

      return null;
    }
  },
};

export default ordersApi;
