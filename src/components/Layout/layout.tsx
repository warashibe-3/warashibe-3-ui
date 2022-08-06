// import { Header } from "src/components/Header/header";
import { Container } from "@nextui-org/react";
import Head from "next/head";
import type { ReactNode } from "react";
import { Footer } from "src/components/Footer/footer";
import { Header } from "src/components/Header/header";
import { PageNav } from "src/components/PageNav/pagenav";
import type { Route } from "src/types/Route";

export const Layout: React.FC<{
  children: ReactNode;
  prevRoute?: Route;
  title: string;
  subRoute?: Route;
}> = ({ children, prevRoute, title, subRoute: subRoute }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sm>
        {prevRoute ? <PageNav prevRoute={prevRoute} /> : <span />}
        <Header title={title} subRoute={subRoute || null}/>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
