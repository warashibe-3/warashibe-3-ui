import { Text } from "@nextui-org/react";
import { TaskCard } from "src/components/TaskCard/taskcard";

import styles from "./taskusercard.module.css";

export const TaskUserCard = ({ icon, username }: { icon: string; username: string }) => {
  return (
    <>
      <Text className={styles.center}>{username}</Text>
      <TaskCard icon={icon} />
    </>
  );
};
