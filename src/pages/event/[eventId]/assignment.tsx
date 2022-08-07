import { Button, Grid, Loading, Modal, Row, Text } from "@nextui-org/react";
import axios from "axios";
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

// const sleep = (ms: number) => {
//   return new Promise((resolve) => {
//     return setTimeout(resolve, ms);
//   });
// };

const joinMember = async (snsId: string, eventId: string, taskId: number): Promise<any> => {
  const res = await axios.post(`/api/event/${eventId}/join`, {
    snsId,
    taskId,
  });
  return res.data;
};

const EventConfirmationPage = () => {
  const [taskId, setTaskId] = useState(null as number | null);
  const router = useRouter();

  const [isVisible, setVisible] = useState(false);

  const onClickOption = async (id: number) => {
    setTaskId(id);

    await joinMember(localStorage.getItem("snsId") as string, router.query.eventId as string, id);

    setVisible(true);
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
      ) : !isVisible ? (
        <Loading css={{ margin: "auto", display: "flex", alignItems: "center" }}>Loading</Loading>
      ) : null}

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isVisible}
        onClose={() => {
          return router.push("/event/");
        }}
      >
        <Modal.Body>
          <Row justify="space-between">
            <Text size={14}>Submit your choise!</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            onClick={() => {
              return router.push("/event/");
            }}
          >
            Return events
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
