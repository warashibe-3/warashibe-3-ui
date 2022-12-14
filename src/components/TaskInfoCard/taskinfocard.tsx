import { Icon } from "@iconify/react";
import { Card, Text } from "@nextui-org/react";

import styles from "./taskinfocard.module.css";

export const TaskInfoCard = ({
  icon,
  title,
  description,
  onclick,
}: {
  icon: string;
  title: string;
  description: string;
  onclick: (event: any) => void;
}) => {
  return (
    <Card variant="flat" isPressable className={styles.item} onClick={onclick}>
      <Card.Body className={styles.body}>
        <Icon icon={icon} fontSize={"calc(100px + 10 * (100vw - 800px)/100)"} className={styles.icon} />
      </Card.Body>
      <Card.Header className={styles.header}>
        <Text className={styles.title}>{title}</Text>
      </Card.Header>
      <Card.Footer className={styles.footer}>
        <Text className={styles.description}>{description}</Text>
      </Card.Footer>
    </Card>
  );
};
