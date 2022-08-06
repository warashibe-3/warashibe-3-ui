import { Text } from "@nextui-org/react";

import styles from "./header.module.css";

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <div className={styles.title}>
        <Text h2>{title}</Text>
      </div>
    </header>
  );
};
