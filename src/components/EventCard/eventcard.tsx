import { Card, Text } from "@nextui-org/react";
import type { EventModel } from "src/types/EventModel";

import styles from "./eventcard.module.css";

export const EventCard: React.FC<{ event: EventModel }> = ({ event }) => {
  const { title, isCompleted } = event;
  return (
    <div className={styles.space}>
      <Card>
        <Card.Body>
          <Text>{title}</Text>
          <Text>{isCompleted}</Text>
        </Card.Body>
      </Card>
    </div>
  );
};
