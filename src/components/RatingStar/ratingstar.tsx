import { useState } from 'react';
import { Text } from '@nextui-org/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faFullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import styles from './ratingstar.module.css'

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
            onClick={() => setRating(index)}
          >
            <FontAwesomeIcon icon={index <= (rating) ? faFullStar : faStar} size="2x" />
          </button>
        );
      })}
    </>
  );
};
