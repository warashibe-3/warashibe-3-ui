import { Grid, Spacer } from "@nextui-org/react";
import Router from "next/router";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { RockButton } from "src/components/RockButton/rockbutton";
import { TaskUserCard } from "src/components/TaskUserCard/taskusercard";

// stub data
const userTaskList = [
  {
    username: "User A",
    task: "fa6-regular:calendar-check",
    type: "Participant",
  },
  {
    username: "User B",
    task: "fa:shopping-bag",
    type: "Participant",
  },
  {
    username: "User C",
    task: "fa6-regular:calendar-check",
    type: "Participant",
  },
  {
    username: "Specialist L",
    task: "fa:money",
    type: "Specialist",
  },
];

const EventConfirmationPage = () => {
  return (
    <Layout title="Confirmation" pageTitle="Review">
      <Grid.Container>
        {userTaskList.map((task, index) => {
          return (
            <Grid key={index} xs={6} direction="column">
              <TaskUserCard icon={task.task} username={task.username} />
            </Grid>
          );
        })}
      </Grid.Container>
      <Spacer y={2} />
      <RockButton
        text="Create NFT"
        onClick={() => {
          Router.push("/event/token");
        }}
      />
      <Spacer y={2} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
