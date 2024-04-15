import { API_URL, DEFAULT_HEADERS } from "../constants/configConstants";
import { Review } from "./reviews.model";

const URL = API_URL + "reviews";

const reviewsApi = {
  fetchAllReviews: async (): Promise<Review[] | null> => {
    try {
      const response = await fetch(URL, {
        headers: DEFAULT_HEADERS,
      });

      const data = await response.json();

      return data;
    } catch (e: any) {
      console.error("error reviews", e);

      return null;
    }
  },
};

export default reviewsApi;
