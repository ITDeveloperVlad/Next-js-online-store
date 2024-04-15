import { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
