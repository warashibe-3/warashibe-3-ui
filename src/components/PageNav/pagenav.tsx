import * as React from "react";
import NextLink from "next/link";
import { useTheme, styled, Container, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import styles from "./pagenav.module.scss";

export interface Route {
  title: string;
  href: string;
}

export interface PageNavProps {
  prevRoute?: Route;
  nextRoute?: Route;
}

export const PageNav: React.FC<PageNavProps> = ({ prevRoute, nextRoute }) => {
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
