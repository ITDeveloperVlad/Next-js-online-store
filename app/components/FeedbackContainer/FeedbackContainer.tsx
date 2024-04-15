"use client";

import { useEffect, useState } from "react";
import { Review } from "../../api/reviews/reviews.model";
import reviewsApi from "../../api/reviews/reviews";
import FeedbackItem from "./FeedbackItem/FeedbackItem";

import styles from "./FeedbackContainer.module.scss";

const FeedbackContainer = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchReview = async () => {
      setReviews([]);
      setIsLoading(true);
      const res = await reviewsApi.fetchAllReviews();

      setIsLoading(false);

      if (!res) return setIsError(true);

      setReviews(res);
    };

    fetchReview();
  }, []);

  return (
    <div className={styles.container}>
      {reviews.map((el) => (
        <FeedbackItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export default FeedbackContainer;
