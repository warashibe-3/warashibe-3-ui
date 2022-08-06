// import { Header } from "src/components/Header/header";
import { Container } from "@nextui-org/react";
import Head from "next/head";
import type { ReactNode } from "react";
import { Footer } from "src/components/Footer/footer";
import { Header } from "src/components/Header/header";
import { PageNav } from "src/components/PageNav/pagenav";
import type { Route } from "src/types/Route";

export const Layout = (props: { 
  children: ReactNode, 
  prevRoute?: Route
  title: string
}) => {
  const {children, prevRoute, title} = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sm>
      {prevRoute ? (
        <PageNav
          prevRoute={prevRoute}
        />
      ) : <span />}
      <Header title={title}/>
      <main>{children}</main>
      <Footer />
    </Container>
    </>
    
  );
};
