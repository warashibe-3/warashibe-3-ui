import { Container } from "@nextui-org/react";
import { Layout } from "src/components/Layout/layout";
import { LineLogin } from "src/components/LineLogin/linelogin";

const Login = () => {
  return (
    <Layout title="Home">
      <Container>
        <LineLogin
          text="Login with Line"
        />
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
