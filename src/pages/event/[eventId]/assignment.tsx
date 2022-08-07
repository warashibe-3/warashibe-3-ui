import { Grid, Loading } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { TaskInfoCard } from "src/components/TaskInfoCard/taskinfocard";

const taskData = [
  {
    taskId: 1,
    title: "スケジュール管理",
    description:
      "Schedule and Expense Management, Venue Reservation, Information Preparation and Distribution, Confirmation of Participants",
    icon: "fa6-regular:calendar-check",
  },
  {
    taskId: 10,
    title: "食材の準備",
    description: "Shopping for Ingredients",
    icon: "fa:shopping-bag",
  },
  {
    taskId: 15,
    title: "企画",
    description: "Event Management, Coordination with the Venue.",
    icon: "clarity:book-solid",
  },
  {
    taskId: 20,
    title: "精算",
    description: "Calculation of Shared Expenses, Fund Collection",
    icon: "fa:money",
  },
];

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

const EventConfirmationPage = () => {
  const [taskId, setTaskId] = useState(null as number | null);
  const router = useRouter();

  const onClickOption = async (id: number) => {
    setTaskId(id);

    await sleep(1000);

    return router.push("/event/");
  };

  return (
    <Layout
      title="Event"
      pageTitle="Select Steps that you are not interested in doing"
      prevRoute={{
        title: "Back",
        href: "/event/new",
      }}
    >
      {!taskId ? (
        <Grid.Container gap={2}>
          {taskData.map((task, index) => {
            return (
              <Grid key={index} xs={12} direction="column">
                <TaskInfoCard
                  title={task.title}
                  description={task.description}
                  icon={task.icon}
                  onclick={() => {
                    return onClickOption(task.taskId);
                  }}
                />
              </Grid>
            );
          })}
        </Grid.Container>
      ) : (
        <Loading css={{ margin: "auto", display: "flex", alignItems: "center" }}>Loading</Loading>
      )}
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
