import { Grid } from "@nextui-org/react";
import Link from "next/link";
import { EventCard } from "src/components/EventCard/eventcard";
import { Layout } from "src/components/Layout/layout";
import { RockButton } from "src/components/RockButton/rockbutton";

// stub data
const eventList = [
  {
    title: "Sunday Evening BBQ",
    isCompleted: false,
    isReviewed: false,
  },
  {
    title: "Golden Week Karaoke",
    isCompleted: true,
    isReviewed: false,
  },
  {
    title: "Obon River Side BBQ",
    isCompleted: true,
    isReviewed: true,
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
        return <EventCard key={index} event={{ ...event, id: `${index}` }} />;
      })}
      <Grid.Container gap={2} justify="center" direction="column" alignItems="center">
        <Grid>
          <Link href="/event/join">
            <RockButton text="Insert Event Code" />
          </Link>
        </Grid>
        <Grid>
          <Link href="/event/new">
            <RockButton text="Create New Event" />
          </Link>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventPage;
