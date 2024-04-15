import { useEffect, useRef, useState } from "react";

import styles from "./PhoneInput.module.scss";

const PhoneInput = () => {
  const [phone, setPhone] = useState("+");
  const inputCard = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (!/^\+\d*$/.test(inputCard.current.value)) {
      inputCard.current.value = "+";
    }

    setPhone(inputCard.current.value);

    // const cardValue = inputCard.current.value
    //   .replace(/\D/g, "")
    //   .match(
    //     /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    //   );

    // console.log(cardValue);

    // // inputCard.current.value = cardValue;
    // // inputCard.current.value = !cardValue[2]
    // //   ? cardValue[1]
    // //   : `${cardValue[1]}-${cardValue[2]}${`${
    // //       cardValue[3] ? `-${cardValue[3]}` : ""
    // //     }`}${`${cardValue[4] ? `-${cardValue[4]}` : ""}`}`;
    // const numbers = inputCard.current.value.replace(/(\D)/g, "");

    // setPhone(numbers);
  };

  return (
    <input
      type="text"
      ref={inputCard}
      value={phone}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default PhoneInput;
