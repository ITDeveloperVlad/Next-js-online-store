import { useEffect, useState } from "react";
import eventBus from "../../../modules/eventBus";
import { OrderBusProps } from "../../../modules/eventBus/events/models/events.model";

const OrdersItems = () => {
  const [orderInfo, setOrderInfo] = useState<OrderBusProps[]>([]);

  useEffect(() => {
    const setOrders = (order: OrderBusProps) => {
      console.log("helo");
      setOrderInfo((prev) => {
        const isSameId = prev.some((el) => el.id === order.id);

        if (!isSameId) {
          return [{ ...order }];
        }

        return prev.reduce((acc: OrderBusProps[], el) => {
          if (el.id === order.id) {
            acc.push({ ...el, count: order.count });
          }

          return acc;
        }, []);
      });
    };

    const unsubscribe = eventBus.orderCountChange.subscribe(setOrders);

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {orderInfo.map((el) => (
        <p key={el.id}>
          {el.name} x{el.count} {el.price * el.count}₽
        </p>
      ))}
    </div>
  );
};

export default OrdersItems;
