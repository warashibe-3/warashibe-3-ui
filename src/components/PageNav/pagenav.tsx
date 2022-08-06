import { Icon } from "@iconify/react";
import { Container } from "@nextui-org/react";
import NextLink from "next/link";
import type { Route } from "src/types/Route";

import styles from "./pagenav.module.scss";

export interface PageNavProps {
  prevRoute: Route;
}

export const PageNav: React.FC<PageNavProps> = ({ prevRoute }) => {
  return (
    <Container display="flex" justify="space-between" css={{ py: "30px" }} gap={0}>
      <NextLink href={prevRoute.href}>
        <a className={styles.navLink}>
          <Icon icon="ep:arrow-left-bold" />
          <span className={styles.title}>{prevRoute.title}</span>
        </a>
      </NextLink>
    </Container>
  );
};
