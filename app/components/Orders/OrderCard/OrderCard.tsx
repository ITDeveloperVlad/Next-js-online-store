"use client";

import { FC } from "react";

import styles from "./OrderCard.module.scss";
import BuyButtons from "./BuyButtons/BuyButtons";
import { Order } from "../../../api/orders/orders.model";

interface OrderCardProps extends Order {}

const OrderCard: FC<OrderCardProps> = ({
  id,
  description,
  image_url,
  price,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <div className={styles.img}>
          <img src={image_url} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.dsc}>{description}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.price}>цена: {price}₽</p>
        <BuyButtons id={id} name={title} price={price} />
      </div>
    </div>
  );
};

export default OrderCard;
