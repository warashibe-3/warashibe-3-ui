import { Grid, Spacer } from "@nextui-org/react";
import Router from "next/router";
import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { ReviewCard } from "src/components/ReviewCard/reviewcard";
import { RockButton } from "src/components/RockButton/rockbutton";

// stub data
const userList = [
  {
    name: "User A",
    profile: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "User B",
    profile: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    name: "User C",
    profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "User D",
    profile: "https://i.pravatar.cc/150?u=a042581f4e25056704b",
  },
];

const ReviewPage = () => {
  return (
    <Layout title="Review" pageTitle="Review">
      <Grid.Container>
        {userList.map((user, index) => {
          return <ReviewCard username={user.name} profile={user.profile} key={index} />;
        })}
      </Grid.Container>
      <Spacer y={2} />
      <RockButton
        text="Send Star!"
        onClick={() => {
          Router.push("/event");
        }}
      />
      <Spacer y={2} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default ReviewPage;
