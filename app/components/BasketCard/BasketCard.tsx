"use client";

import Button from "../UiKit/Button/Button";
import styles from "./BasketCard.module.scss";
import OrdersItems from "./OrdersItems/OrdersItems";
import PhoneInput from "./PhoneInput/PhoneInput";

const BasketCard = () => {
  return (
    <div className={styles.container}>
      <h3>Добавленные товары</h3>
      <OrdersItems />
      <div className={styles.btnsBlock}>
        <PhoneInput />
        <Button text="заказать" onClick={console.log} />
      </div>
    </div>
  );
};

export default BasketCard;
