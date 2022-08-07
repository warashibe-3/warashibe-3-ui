/* eslint-disable func-style */
import { Grid, Loading, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { RockButton } from "src/components/RockButton/rockbutton";
import { TaskUserCard } from "src/components/TaskUserCard/taskusercard";
import type { Member } from "src/lib/fetchMember";

interface Task {
  username: string;
  task: string;
  type: "Participant" | "Specialist";
}

const convertTaskToIcon = (taskId: number) => {
  switch (taskId) {
    case 1:
      return "fa6-regular:calendar-check";
    case 10:
      return "fa:shopping-bag";
    case 20:
      return "fa:money";
    case 15:
      return "clarity:book-solid";
    default:
      return "fa:question";
  }
};

const fetchMember = async (id: string): Promise<Member[]> => {
  const res = await axios(`/api/event/${id}/member`);
  return res.data;
};

const EventConfirmationPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const [tasks, setTasks] = useState(null as Task[] | null);

  useEffect(() => {
    const fetchAndSetMember = async (eventId: string) => {
      const tasks = (await fetchMember(eventId)).map((member) => {
        return {
          username: member.userName,
          task: convertTaskToIcon(member.taskId),
          type: member.specialist ? "Specialist" : "Participant",
        } as Task;
      });
      setTasks(tasks);
    };
    if (eventId) {
      fetchAndSetMember(eventId as string);
    }
  }, [router, eventId]);

  return (
    <Layout
      title="Confirmation"
      pageTitle="Confirmation"
      prevRoute={{
        title: "Event",
        href: "/event",
      }}
    >
      {tasks ? (
        <>
          <Grid.Container>
            {tasks.map((task, index) => {
              return (
                <Grid key={index} xs={6} direction="column">
                  <Text>{task.type}</Text>
                  <TaskUserCard icon={task.task} username={task.username} />
                </Grid>
              );
            })}
          </Grid.Container>
          <Spacer y={2} />
          <RockButton
            text="Create NFT"
            onClick={() => {
              Router.push(`/event/${eventId}/token`);
            }}
          />
          <Spacer y={2} />
        </>
      ) : (
        <Loading css={{ margin: "auto", display: "flex", alignItems: "center" }}>Loading</Loading>
      )}
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
