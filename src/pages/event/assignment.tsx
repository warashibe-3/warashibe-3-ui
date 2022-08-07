import Router from 'next/router'
import { Card, Spacer, Grid } from "@nextui-org/react"

import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { TaskInfoCard } from "src/components/TaskInfoCard/taskinfocard";
import { RockButton } from "src/components/RockButton/rockbutton";

const taskData = [
  {
    "title": "企画",
    "description": "Schedule and Expense Management, Venue Reservation, Information Preparation and Distribution, Confirmation of Participants",
    "icon": "fa6-regular:calendar-check"
  },
  {
    "title": "食材の準備",
    "description": "Shopping for Ingredients",
    "icon": "fa:shopping-bag"
  },
  {
    "title": "当日の運営",
    "description": "Event Management, Coordination with the Venue.",
    "icon": "fa6-solid:calendar-day"
  },
  {
    "title": "精算",
    "description": "Calculation of Shared Expenses, Fund Collection",
    "icon": "fa:money"
  }
]

const EventConfirmationPage = () => {
  return (
    <Layout
      title="Event"
      pageTitle="Select Steps that you are not interested in doing"
      prevRoute={{
        title: "Back",
        href: "/event/new",
      }}
    >
      {
        taskData.map(
          (task, index) => {
            return (
              <Grid key={index} xs={12} direction="column">
                <TaskInfoCard
                  title={task.title}
                  description={task.description}
                  icon={task.icon}
                />
              </Grid>
            )
          }
        )
      }
      <Spacer y={2} />
      <RockButton
        text="Create Event"
        onClick={
          () => {
            Router.push("/event/status")
          }
        }
      />
      <Spacer y={2} />
    </Layout>
  )
};

// eslint-disable-next-line import/no-default-export
export default EventConfirmationPage;
