import { Card, Grid, Spacer, Text } from "@nextui-org/react";
import Router from "next/router";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { RockButton } from "src/components/RockButton/rockbutton";
import { TaskCard } from "src/components/TaskCard/taskcard";
import { UserCard } from "src/components/UserCard/usercard";

// stub data
const userData = [
  {
    user: "User A",
    profile: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    user: "User B",
    profile: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    user: "User C",
    profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

const code = "QW4HD-DQCRG-6-GJ-RK";

const taskData = ["fa6-regular:calendar-check", "fa:shopping-bag", "fa6-regular:calendar-check", "fa:money"];

const EventConfirmationPage = () => {
  return (
    <Layout
      title="Event"
      pageTitle="Event"
      prevRoute={{
        title: "Event",
        href: "/event",
      }}
    >
      <Card variant="bordered">
        <Card.Body>
          <Grid.Container css={{ margin: "auto" }}>
            {userData.map((user, index) => {
              return (
                <Grid key={index} xs={6} direction="column">
                  <UserCard profile={user.profile} username={user.user} key={index} />
                </Grid>
              );
            })}
          </Grid.Container>
        </Card.Body>
      </Card>
      <Spacer y={1} />
      <Grid.Container>
        {taskData.map((task, index) => {
          return (
            <Grid key={index} xs={6} direction="column">
              <TaskCard icon={task} key={index} />
            </Grid>
          );
        })}
      </Grid.Container>
      <Spacer y={1} />
      <Text blockquote className="code">Code: {code}</Text>
      <Spacer y={1} />
      <RockButton
        text="Assign Tasks"
        onClick={() => {
          Router.push("/event/0/confirmation");
        }}
      />
      <Spacer y={2} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
