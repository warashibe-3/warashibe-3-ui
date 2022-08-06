import { Button } from '@nextui-org/react'
import { MouseEventHandler } from 'react';

import styles from './rockbutton.module.css'

export const RockButton = ({ text, onClick }: { text: string, onClick: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      {text}
    </Button>
  )
};
