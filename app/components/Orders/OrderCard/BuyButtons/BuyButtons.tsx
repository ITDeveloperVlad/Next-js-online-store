import { FC, useEffect, useState } from "react";
import Button from "../../../UiKit/Button/Button";

import styles from "./BuyButtons.module.scss";
import eventBus from "../../../../modules/eventBus";

interface BuyButtonsProps {
  id: number;
  name: string;
  price: number;
}

const BuyButtons: FC<BuyButtonsProps> = ({ id, name, price }) => {
  const [count, setCount] = useState(0);

  const addOrder = () => setCount((prev) => prev + 1);
  const deleteOrder = () => setCount((prev) => prev - 1);

  useEffect(() => {
    eventBus.orderCountChange.broadcast({ id, name, count, price });
    console.log("count", { id, name, count, price });
  }, [count]);

  if (count) {
    return (
      <div className={styles.container}>
        <Button text="-" onClick={deleteOrder} />
        <div className={styles.count}>{count}</div>
        <Button text="+" onClick={addOrder} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button text="купить" onClick={addOrder} />
    </div>
  );
};

export default BuyButtons;
