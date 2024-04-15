import { FC } from "react";
import { Review } from "../../../api/reviews/reviews.model";

import styles from "./FeedbackItem.module.scss";

interface FeedbackItemProps extends Review {}

const FeedbackItem: FC<FeedbackItemProps> = ({ id, text }) => {
  return (
    <div className={styles.container}>
      <p>Отзыв {id}</p>
      <p>Полученный с api</p>
      <p>HTML</p>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default FeedbackItem;
