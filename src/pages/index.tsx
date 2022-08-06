import Head from "next/head";
import { Layout } from "src/components/Layout/layout";
import { Container, Text } from "@nextui-org/react";
import { PageNav } from "src/components/PageNav/pagenav";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <PageNav
          prevRoute={{ 
            title: "Back",
            href: "/prev"
          }}/>
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
