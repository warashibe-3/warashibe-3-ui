import { Icon } from "@iconify/react";
import { Card } from "@nextui-org/react";

import styles from "./taskcard.module.css";

export const TaskCard = ({ icon }: { icon: string }) => {
  return (
    <Card variant="flat" className={styles.task}>
      <Card.Body>
        <Icon icon={icon} fontSize={"calc(70px + 10 * (100vw - 800px)/100)"} className={styles.icon} />
      </Card.Body>
    </Card>
  );
};
