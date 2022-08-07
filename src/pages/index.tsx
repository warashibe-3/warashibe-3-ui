import { Container } from "@nextui-org/react";
import { Layout } from "src/components/Layout/layout";
import { LineLogin, LineSignup } from "src/components/LineLogin/linelogin";

const Login = () => {
  return (
    <Layout title="Warashibe 3.0">
      <Container>
        <LineLogin text="Login with Line" />
        <LineSignup text="Signup with Line" />
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
