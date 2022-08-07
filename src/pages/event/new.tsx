import { Button, Grid, Input, Text, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "src/components/Layout/layout";
import { RockButton } from "src/components/RockButton/rockbutton";
import type { EventModel } from "src/types/EventModel";

const TemplateStub = ["BBQ", "Karaoke", "Picnic", "More BBQ XD"];

// const createEvent = async (id: string): Promise<EventModel[]> => {
//   const res = await axios.post(`/api/event/list?userId=${id}`);
//   return res.data;
// };

const TemplateChoise: React.FC<{
  update: (event: any) => void;
}> = ({ update }) => {
  return (
    <Grid.Container gap={2} justify="center" direction="column" alignItems="center">
      {TemplateStub.map((event, index) => {
        return (
          <Grid key={index}>
            <Button
              bordered
              color="primary"
              ghost
              size="xl"
              flat
              onClick={() => {
                return update(event);
              }}
            >
              {event}
            </Button>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

const Person: React.FC<{
  update: (event: any) => void;
}> = ({ update }) => {
  return (
    <Input
      label="Number"
      type="number"
      onChange={(event) => {
        return update(event.target.value);
      }}
    />
  );
};

const TitleInput: React.FC<{
  update: (event: any) => void;
}> = ({ update }) => {
  return (
    <Textarea
      underlined
      color="primary"
      label="Title"
      minRows={1}
      onChange={(event) => {
        return update(event.target.value);
      }}
    />
  );
};

const NewEvent = () => {
  const [event, setEvent] = useState({
    isCompleted: false,
    isReviewed: false,
  } as EventModel);

  const updateEventType = (type: string) => {
    setEvent({
      ...event,
      type,
    });
  };

  const updateEventPerson = (person: number) => {
    setEvent({
      ...event,
      person,
    });
  };

  const updateEventTitle = (title: string) => {
    setEvent({
      ...event,
      title,
    });
  };

  const router = useRouter();

  return (
    <Layout
      prevRoute={{
        title: "Event",
        href: "/event",
      }}
      title="Templates"
    >
      {event.type === undefined ? (
        <TemplateChoise update={updateEventType} />
      ) : (
        <Grid.Container gap={2} justify="center" direction="column" alignItems="center">
          <Grid>Event: {event.type}</Grid>
          <Grid>
            <Person update={updateEventPerson} />
          </Grid>
          <Grid>
            <TitleInput update={updateEventTitle} />
          </Grid>
          <Grid>
            {event.person && event.title ? (
              <>
                <Text>Invite URL</Text>
                <Textarea
                  bordered
                  color="secondary"
                  value={`https://warashibe-3-ui.vercel.app/event/${10}/assignment`}
                  css={{ margin: "10px 0px" }}
                />
                <RockButton
                  text="Finish"
                  onClick={() => {
                    return router.push("/event/");
                  }}
                />
              </>
            ) : (
              <RockButton text="Finish" isDisabled={true} />
            )}
          </Grid>
        </Grid.Container>
      )}
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewEvent;
