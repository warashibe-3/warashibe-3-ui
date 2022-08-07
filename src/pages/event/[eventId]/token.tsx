import { Grid, Spacer } from "@nextui-org/react";
import Router from "next/router";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { RockButton } from "src/components/RockButton/rockbutton";
import { TokenHash } from "src/components/TokenHash/tokenhash";

const TokenPage = () => {
  return (
    <Layout title="Token" pageTitle="Token">
      <Grid direction="column" alignItems="center">
        <Grid>
          <Spacer y={15} />
          <TokenHash token="ThiSISaTokeNvAlUEAndItsvEryCool" />
        </Grid>
        <Spacer y={5} />
        <Grid>
          <RockButton
            text="Review"
            onClick={() => {
              Router.push("/event/review");
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default TokenPage;
