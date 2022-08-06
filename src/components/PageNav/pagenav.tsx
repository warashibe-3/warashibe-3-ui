import { Icon } from "@iconify/react";
import { Container } from "@nextui-org/react";
import Link from "next/link";
import type { Route } from "src/types/Route";

import styles from "./pagenav.module.scss";

export interface PageNavProps {
  prevRoute: Route;
}

export const PageNav: React.FC<PageNavProps> = ({ prevRoute }) => {
  return (
    <Link href={prevRoute.href}>
      <a className={styles.navLink}>
        <Container display="flex" alignItems="center" css={{ px: "0", py: "30px" }}>
          <Icon icon="ep:arrow-left-bold" className={styles.navLinkIcon} />
          {prevRoute.title}
        </Container>
      </a>
    </Link>
  );
};
