import { Link,Row, Text } from "@nextui-org/react";
import type { Route } from "src/types/Route";

import styles from "./header.module.css";

export const Header: React.FC<{
  title: string;
  subRoute: Route | null;
}> = ({ title, subRoute }) => {
  return (
    <header>
      <div className={styles.title}>
        <Row justify="space-between" align="center">
          <Text h2>{title}</Text>
          {subRoute ? <Link href={subRoute.href}>{subRoute.title}</Link> : null}
        </Row>
      </div>
    </header>
  );
};
