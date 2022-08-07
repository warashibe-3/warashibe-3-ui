import { Grid, Loading } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EventCard } from "src/components/EventCard/eventcard";
import { Layout } from "src/components/Layout/layout";
import { RockButton } from "src/components/RockButton/rockbutton";
import type { EventModel } from "src/types/EventModel";

const fetchEvent = async (id: string): Promise<EventModel[]> => {
  const res = await axios(`/api/event/list?userId=${id}`);
  return res.data;
};

const EventPage = () => {
  const router = useRouter();

  const [events, setEvent] = useState(null as EventModel[] | null);

  useEffect(() => {
    const userId = localStorage.getItem("snsId");

    const fetchAndSetEvent = async (userId: string) => {
      const events = await fetchEvent(userId);
      if (events) {
        setEvent(events);
      }
    };
    if (userId) {
      fetchAndSetEvent(userId as string);
    }
  }, []);

  return (
    <Layout
      title="Events"
      subRoute={{
        title: "Profile",
        href: "/profile",
      }}
    >
      {events ? (
        events.map((event, index) => {
          return <EventCard key={index} event={{ ...event, id: `${index}` }} />;
        })
      ) : (
        <Loading css={{ margin: "auto", display: "flex", alignItems: "center" }}>Loading</Loading>
      )}
      <Grid.Container gap={2} justify="center" direction="column" alignItems="center">
        <Grid>
          <RockButton
            text="Create New Event"
            onClick={() => {
              router.push("/event/new");
            }}
          />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventPage;
