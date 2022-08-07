import { Text } from "@nextui-org/react";

import styles from "./tokenhash.module.css";

export const TokenHash = ({ token }: { token: string }) => {
  return <Text className={styles.token}>{token}</Text>;
};
