import { Container } from "@nextui-org/react";
import Head from "next/head";
import type { ReactNode } from "react";
import { Header } from "src/components/Header/header";
import { PageNav } from "src/components/PageNav/pagenav";
import type { Route } from "src/types/Route";

export const BaseLayout: React.FC<{
  children: ReactNode;
  prevRoute?: Route;
  title: string;
  pageTitle: string;
  subRoute?: Route;
}> = ({ children, prevRoute, title, pageTitle, subRoute: subRoute }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container xs css={{ minHeight: "100vh" }}>
        {prevRoute ? <PageNav prevRoute={prevRoute} /> : <span />}
        <Header title={pageTitle} subRoute={subRoute || null} />
        {children}
      </Container>
    </>
  );
};
