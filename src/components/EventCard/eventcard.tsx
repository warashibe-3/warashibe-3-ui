import { Card, Row, Text } from "@nextui-org/react";
import type { EventModel } from "src/types/EventModel";

import styles from "./eventcard.module.css";

const StatusText: React.FC<{ isCompleted: boolean }> = ({ isCompleted }) => {
  if (isCompleted) {
    return <Text className={styles.completed}>Completed</Text>;
  } else {
    return <Text className={styles.progress}>In Progress</Text>;
  }
};

export const EventCard: React.FC<{ event: EventModel }> = ({ event }) => {
  const { title, isCompleted } = event;
  return (
    <div className={styles.space}>
      <Card>
        <Card.Body css={{ justifyItems: "flex-start" }}>
          <Row justify="space-between" align="center">
            <Text>{title}</Text>
            <StatusText isCompleted={isCompleted} />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
