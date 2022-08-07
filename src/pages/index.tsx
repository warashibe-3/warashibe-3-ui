import { Container, Spacer } from "@nextui-org/react";
import { HeroLogo } from "src/components/HeroLogo/herologo";
import { Layout } from "src/components/Layout/layout";
import { LineLogin, LineSignup } from "src/components/LineLogin/linelogin";

const Login = () => {
  return (
    <Layout title="">
      <Container>
        <Spacer y={6} />
        <HeroLogo />
        <Spacer y={4} />

        <LineLogin text="Login with Line" />
        <LineSignup text="Signup with Line" />

        <Spacer y={4} />
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
