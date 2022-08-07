import Router from 'next/router'
import { Card, Spacer, Grid } from "@nextui-org/react"

import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { TaskCard } from "src/components/TaskCard/taskcard";
import { UserCard } from "src/components/UserCard/usercard";
import { RockButton } from "src/components/RockButton/rockbutton";

// stub data
const userData = [
  {
    "user": "User A",
    "profile": "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    "user": "User B",
    "profile": "https://i.pravatar.cc/150?u=a048581f4e29026701d"
  },
  {
    "user": "User C",
    "profile": "https://i.pravatar.cc/150?u=a04258114e29026702d"
  }
]

const taskData = [
  "fa6-regular:calendar-check",
  "fa:shopping-bag",
  "fa6-solid:calendar-day",
  "fa:money"
]

const EventConfirmationPage = () => {
  return (
    <Layout
      title="Event"
      pageTitle="Event"
      prevRoute={{
        title: "Home",
        href: "/event",
      }}
    >
      <Card variant="bordered">
        <Card.Body>
          <Grid.Container>
            {
              userData.map(
                (user, index) => {
                  return (
                    <Grid key={index} xs={6} direction="column">
                      <UserCard profile={user.profile} username={user.user} key={index} />
                    </Grid>
                  )
                }
              )
            }
          </Grid.Container>
        </Card.Body>
      </Card>
      <Spacer y={1} />
      <Grid.Container>
        {
          taskData.map(
            (task, index) => {
              return (
                <Grid key={index} xs={6} direction="column">
                  <TaskCard icon={task} key={index} />
                </Grid>
              )
            }
          )
        }
      </Grid.Container>
      <Spacer y={2} />
      <RockButton
        text="Create NFT"
        onClick={
          () => {
            Router.push("/event/confirmation")
          }
        }
      />
      <Spacer y={2} />
    </Layout>
  )
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
