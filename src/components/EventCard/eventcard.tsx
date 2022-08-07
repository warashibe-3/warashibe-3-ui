import { Card, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import type { EventModel } from "src/types/EventModel";

import styles from "./eventcard.module.css";

const StatusText: React.FC<{
  isCompleted: boolean;
  isReviewed: boolean;
}> = ({ isCompleted, isReviewed }) => {
  if (isCompleted) {
    if (isReviewed) {
      return <Text className={styles.completed}>Completed</Text>;
    } else {
      return <Text className={styles.tobereviewed}>To Be Reviewed</Text>;
    }
  } else {
    return <Text className={styles.progress}>In Progeress</Text>;
  }
};

const CardUnit: React.FC<{ event: EventModel }> = ({ event }) => {
  const { title, isCompleted, isReviewed } = event;
  return (
    <Card>
      <Card.Body css={{ justifyItems: "flex-start" }}>
        <Row justify="space-between" align="center">
          <Text>{title}</Text>
          <StatusText isCompleted={isCompleted} isReviewed={isReviewed} />
        </Row>
      </Card.Body>
    </Card>
  );
};
export const EventCard: React.FC<{ event: EventModel }> = ({ event }) => {
  const { isCompleted, isReviewed } = event;
  const url = isCompleted ? (isReviewed ? null : "/event/review") : "/event/confirmation";
  return (
    <div className={styles.space}>
      {url ? (
        <Link href={url + "?id=" + event.id}>
          <a>
            <CardUnit event={event} />
          </a>
        </Link>
      ) : (
        <CardUnit event={event} />
      )}
    </div>
  );
};
