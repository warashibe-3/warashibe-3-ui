import { Container } from "@nextui-org/react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect } from 'react';
import { Layout } from "src/components/Layout/layout";


interface LineLoginAuth {
  status: number
  snsId: string
  name: string
  picture: string
}

const fetchLoginAuth = async (code: string, state: string): Promise<LineLoginAuth> => {
  const params = {
    code, state
  }
  const {data} = await axios.get('/api/v1/line-login/auth', { params })
  return {
    status: data.status,
    snsId: data.sns_id,
    name: data.line_user.name,
    picture: data.line_user.picture,
  }
}

const lineLoginAuth = async(code: string, state: string): Promise<void> => {
  try {
    const ret = await fetchLoginAuth(code, state)
    const { snsId } = ret
    localStorage.setItem("snsId", snsId)
    localStorage.setItem("profile", JSON.stringify(ret))
    Router.push('/event')
  }
  catch(e) {
    console.error(e)
    Router.push(`/`);
  }
}


const Auth = () => {
  const router = useRouter();
  const { code, state } = router.query as { code: string; state: string };

  useEffect(()=>{
    if (code && state) {
      // よくわからないがcodeやstateが空の状態で複数回呼ばれるので逃げ
      lineLoginAuth(code, state)
    }

    }, [router, code, state])

  return (
    <Layout title="Auth...">
      <Container>
        please wait...
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Auth;
