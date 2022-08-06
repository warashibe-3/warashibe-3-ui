import { User, Grid, Text, Spacer } from "@nextui-org/react";

import { RatingStar } from "src/components/RatingStar/ratingstar";

import styles from './reviewcard.module.css'

export const ReviewCard = ({ profile, username }: { profile: string, username: string }) => {
  return (
    <Grid.Container gap={0}>
      <Grid xs={12}>
        <Grid>
          <User
            src={profile}
            size="xl"
            className={styles.profile}
            name={username}
          />
        </Grid>
      </Grid>
      <Grid className={styles.stars}>
        <RatingStar />
      </Grid>
      <Spacer y={3} />
    </Grid.Container>
  );
};
