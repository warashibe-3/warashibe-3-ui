import { EventCard } from "src/components/EventCard/eventcard";
import { Layout } from "src/components/Layout/layout";

// stub data
const eventList = [
  {
    title: "Sunday Evening BBQ",
    isCompleted: true,
  },
  {
    title: "Golden Week Karaoke",
    isCompleted: false,
  },
  {
    title: "Obon River Side BBQ",
    isCompleted: false,
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
