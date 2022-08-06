import { Card, Input, Grid, Text } from "@nextui-org/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { TaskCard } from 'src/components/TaskCard/taskcard'

import styles from './taskusercard.module.css'

export const TaskUserCard = (
  { icon, username }: { icon: IconProp, username: string }
) => {
  return (
    <Grid>
      <Grid direction="column">
        <Text className={styles.center}>{username}</Text>
        <TaskCard icon={icon} />
      </Grid>
    </Grid>
  )
};
