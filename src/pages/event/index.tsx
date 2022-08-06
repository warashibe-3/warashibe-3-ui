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
    <Layout title="Events">
      {eventList.map((event, index) => {
        return <EventCard key={index} event={event} />;
      })}
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default EventPage;
