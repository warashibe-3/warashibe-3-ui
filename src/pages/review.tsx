import Router from 'next/router'
import { Spacer } from "@nextui-org/react"

import { BaseLayout as Layout } from "src/components/BaseLayout/baselayout";
import { ReviewCard } from "src/components/ReviewCard/reviewcard";
import { RockButton } from "src/components/RockButton/rockbutton";

// stub data
const userList = [
  {
    name: "User A",
    profile: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    name: "User B",
    profile: "https://i.pravatar.cc/150?u=a048581f4e29026701d"
  },
  {
    name: "User C",
    profile: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "User D",
    profile: "https://i.pravatar.cc/150?u=a042581f4e25056704b"
  }
];

const ReviewPage = () => {
  return (
    <Layout title="Review" pageTitle="Review">
      {
        userList.map(
          (user, index) => {
            return <ReviewCard user={user.name} profile={user.profile} key={index} />
          }
        )
      }
      <Spacer y={2} />
      <RockButton
        text="Close"
        onClick={
          () => {
            Router.push("/")
          }
        }
      />
    </Layout>
  )
};

// eslint-disable-next-line import/no-default-export
export default ReviewPage;
