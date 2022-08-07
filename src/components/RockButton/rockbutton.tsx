import { Button } from "@nextui-org/react";

import styles from "./rockbutton.module.css";

export const RockButton: React.FC<{
  text: string;
  onClick?: (event: any) => void;
  isDisabled?: boolean;
}> = ({ text, onClick, isDisabled }) => {
  return isDisabled ? (
    <Button className={styles.disabled} disabled>
      {text}
    </Button>
  ) : (
    <Button className={styles.button} onClick={onClick}>
      {text}
    </Button>
  );
};
