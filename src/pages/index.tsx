import Head from "next/head";
import { Layout } from "src/components/Layout/layout";
import { Container, Text } from "@nextui-org/react";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Text h2>Hello Next.js</Text>
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
