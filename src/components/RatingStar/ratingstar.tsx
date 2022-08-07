import { Icon } from "@iconify/react";
import { useState } from "react";

import styles from "./ratingstar.module.css";

export const RatingStar = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={styles.button}
            onClick={() => {
              return setRating(index);
            }}
          >
            <Icon icon={index <= rating ? "fa:star" : "bi:star"} fontSize={"2x"} />
          </button>
        );
      })}
    </>
  );
};
