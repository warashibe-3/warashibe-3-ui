import { Card } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from './taskcard.module.css'

export const TaskCard = (
  { icon }: { icon: IconProp }
) => {
  return (
    <Card
      variant="flat"
      className={styles.task}
    >
      <Card.Body>
        <FontAwesomeIcon icon={icon} size={"3x"} className={styles.icon} />
      </Card.Body>
    </Card>
  )
};
