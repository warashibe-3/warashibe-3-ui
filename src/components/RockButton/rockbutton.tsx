import { Button } from '@nextui-org/react'

import styles from './rockbutton.module.css'

export const RockButton = ({ text }: { text: string }) => {
  return (
    <Button className={styles.button}>
      {text}
    </Button>
  )
};
