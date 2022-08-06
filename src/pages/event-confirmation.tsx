import Router from 'next/router'
import { Spacer } from "@nextui-org/react"
import {
  faCalendarCheck, faMoneyBill1
} from '@fortawesome/free-regular-svg-icons'
import {
  faCalendarDays, faBagShopping
} from '@fortawesome/free-solid-svg-icons'

import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { TaskUserCard } from "src/components/TaskUserCard/taskusercard";
import { RockButton } from "src/components/RockButton/rockbutton";


// stub data
const userTaskList = [
  {
    username: "User A",
    task: faCalendarDays,
    type: "Participant"
  },
  {
    username: "User B",
    task: faBagShopping,
    type: "Participant"
  },
  {
    username: "User C",
    task: faCalendarCheck,
    type: "Participant"
  },
  {
    username: "Specialist L",
    task: faMoneyBill1,
    type: "Specialist"
  }
];

const EventConfirmationPage = () => {
  return (
    <Layout title="Review" pageTitle="Review">
      {
        userTaskList.map(
          (task, index) => {
            return (
              <TaskUserCard icon={task.task} username={task.username} key={index} />
            )
          }
        )
      }
      <Spacer y={2} />
      <RockButton
        text="Create NFT"
        onClick={
          () => {
            Router.push("/token")
          }
        }
      />
      <Spacer y={2} />
    </Layout>
  )
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
