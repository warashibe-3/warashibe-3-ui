import { Avatar, Grid, Text, Spacer } from "@nextui-org/react";

import { RatingStar } from "src/components/RatingStar/ratingstar";

export const ReviewCard = ({profile, user}: {profile: string, user: string}) => {
  return (
    <Grid.Container gap={0}>
      <Grid xs={4}>
        <Grid direction="column">
          <Grid>
            <Avatar
              src={profile}
              css={{ size: "$20" }}
            />
          </Grid>
          <Grid>
            <Text h2 size={16} css={{width: "stretch", textAlign: "center"}}>{user}</Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={8}>
        <RatingStar/>
      </Grid>
      <Spacer y={0.8} />
    </Grid.Container>
  );
};
