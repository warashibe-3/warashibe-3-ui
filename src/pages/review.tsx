import { Layout } from "src/components/Layout/layout";
import { ReviewCard } from "src/components/ReviewCard/reviewcard";

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
    <Layout title="Review">
      {
        userList.map(
          (user, index) => {
            return <ReviewCard user={user.name} profile={user.profile} key={index}/>
          }
        )
      }
      {/* <ReviewCard profile="https://i.pravatar.cc/150?u=a04258114e29026702d"/> */}
    </Layout>
  )
};

// eslint-disable-next-line import/no-default-export
export default ReviewPage;
