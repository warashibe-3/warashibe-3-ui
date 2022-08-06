import { Container } from "@nextui-org/react";
import { Layout } from "src/components/Layout/layout";

const Template = () => {
  return (
    <Layout 
      prevRoute={{
        title: "Event",
        href: "/event",
      }}
      title="Service Template">
      <Container>
        hoge
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Template;
