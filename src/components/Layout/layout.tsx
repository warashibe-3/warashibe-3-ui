import type { ReactNode } from "react";
import { Footer } from "src/components/Footer/footer";
import { Header } from "src/components/Header/header";
import { Container, } from '@nextui-org/react';

export const Layout = (props: { children: ReactNode }) => {
  return (
    <Container sm>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
};
