import { Icon } from "@iconify/react";
import { Container } from "@nextui-org/react";
import NextLink from "next/link";

import styles from "./pagenav.module.scss";

export interface Route {
  title: string;
  href: string;
}

export interface PageNavProps {
  prevRoute: Route;
}

export const PageNav: React.FC<PageNavProps> = ({ prevRoute }) => {
  return (
    <Container display="flex" justify="space-between" css={{ py: "12%" }} gap={0}>
      {prevRoute ? (
        <NextLink href={prevRoute.href}>
          <a className={styles.navLink}>
            <Icon icon="ep:arrow-left-bold" />
            <span className={styles.title}>{prevRoute.title}</span>
          </a>
        </NextLink>
      ) : (
        <span />
      )}
    </Container>
  );
};
