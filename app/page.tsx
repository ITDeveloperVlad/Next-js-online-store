import BasketCard from "./components/BasketCard/BasketCard";
import FeedbackContainer from "./components/FeedbackContainer/FeedbackContainer";
import Orders from "./components/Orders/Orders";
import TitleBlock from "./components/TitleBlock/TitleBlock";

import styles from "./page.module.scss";

const Page = () => {
  return (
    <div className={styles.container}>
      <TitleBlock />
      <FeedbackContainer />
      <BasketCard />
      <Orders />
    </div>
  );
};

export default Page;
