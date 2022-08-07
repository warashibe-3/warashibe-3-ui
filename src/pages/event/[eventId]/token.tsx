import { Grid, Spacer } from "@nextui-org/react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { RockButton } from "src/components/RockButton/rockbutton";
import { TokenHash } from "src/components/TokenHash/tokenhash";

interface TokenMint {
  status: number
  msg: string
  txHash: string
}

const mintToken = async (): Promise<TokenMint> => {
  const params = {
    amount: 10,
    target: 'system',
  }
  const tokenType = 'st_feedback_points'
  const {data} = await axios.get(`/api/v1/blockchain/tokens/${tokenType}/mint?amount=10&target=system`, { params })
  return {
    status: data.status,
    msg: data.msg,
    txHash: data.tx_hash,
  }
}


const TokenPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const [token, setToken] = useState("ThiSISaTokeNvAlUEAndItsvEryCool");

  useEffect(() => {
    mintToken().then((ret: TokenMint) => {
      setToken(ret.txHash)
    })
  }, []);

  return (
    <Layout
      title="Token"
      pageTitle="Token"
      prevRoute={{
        title: "Event",
        href: "/event",
      }}
    >
      <Grid direction="column" alignItems="center">
        <Grid>
          <Spacer y={5} />
          <TokenHash token={token} />
        </Grid>
        <Spacer y={3} />
        <Grid>
          <RockButton
            text="Review"
            onClick={() => {
              Router.push(`/event/${eventId}/review`);
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default TokenPage;
