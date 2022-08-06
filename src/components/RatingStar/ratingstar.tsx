import { useState } from 'react';
import { Text } from '@nextui-org/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faFullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import styles from './ratingstar.module.css'

export const RatingStar = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={styles.button}
            onClick={() => setRating(index)}
          >
            <Text h1 size={18} css={{ m: 10 }}>
              {index}
            </Text>
            <FontAwesomeIcon icon={index <= (rating) ? faFullStar : faStar} />
          </button>
        );
      })}
    </div>
  );
};
