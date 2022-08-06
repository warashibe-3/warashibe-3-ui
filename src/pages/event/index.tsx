import { Button, Grid } from "@nextui-org/react";
import { EventCard } from "src/components/EventCard/eventcard";
import { Layout } from "src/components/Layout/layout";

// stub data
const eventList = [
  {
    title: "Sunday Evening BBQ",
    isCompleted: false,
  },
  {
    title: "Golden Week Karaoke",
    isCompleted: true,
  },
  {
    title: "Obon River Side BBQ",
    isCompleted: true,
  },
];

const EventPage = () => {
  return (
    <Layout
      title="Events"
      subRoute={{
        title: "Profile",
        href: "/profile",
      }}
    >
      {eventList.map((event, index) => {
        return <EventCard key={index} event={event} />;
      })}
      <Grid.Container gap={2} justify="center" direction="column" alignItems="center">
        <Grid>
          <Button bordered color="primary" auto ghost size="xl" flat>
            Insert Event Code
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="primary" auto ghost size="xl" flat>
            Create New Event
          </Button>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventPage;
