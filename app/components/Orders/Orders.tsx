"use client";

import { useCallback, useEffect, useState } from "react";
import { OrderInfo } from "../../api/orders/orders.model";
import ordersApi from "../../api/orders/orders";
import OrderCard from "./OrderCard/OrderCard";

import styles from "./Orders.module.scss";

const PAGE_SIZE = 20;

const Orders = () => {
  const [ordersInfo, setOrdersInfo] = useState<OrderInfo>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchOrders = useCallback(async (page = 1) => {
    setOrdersInfo(null);
    setIsLoading(true);
    const res = await ordersApi.fetchOrders(page, PAGE_SIZE);

    setIsLoading(false);

    if (!res) return setIsError(true);

    setOrdersInfo(res);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className={styles.container}>
      {ordersInfo?.products?.map((el) => (
        <OrderCard key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Orders;
