import { User } from '@nextui-org/react';

import styles from './usercard.module.css'

export const UserCard = (
  { profile, username }: { profile: string, username: string }
) => {
  return (
    <User
      src={profile}
      name={username}
      size="xl"
      className={styles.user}
    />
  )
};
