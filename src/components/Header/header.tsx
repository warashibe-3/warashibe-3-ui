import { Text } from "@nextui-org/react";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.title}>
        <Text h1>Warashibe 3 UI</Text>
      </div>
    </header>
  );
};
