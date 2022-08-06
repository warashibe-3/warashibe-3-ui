import { Text } from "@nextui-org/react";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.title}>
        <Text small lang="en">
          @ 2022 warashibe 3.0
        </Text>
      </div>
    </footer>
  );
};
