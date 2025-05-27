import Tweet from "./component/tweet";
import UserList from "./component/user-list";
import TweetList from "./component/tweet-list";

export default function HomeView() {
  return (
    <div className="flex gap-10 justify-center bg-[#f1f5f9] h-[100vh] p-16">
      <div className="flex flex-col gap-10 ">
        <Tweet />
        <TweetList />
      </div>
      <UserList />
    </div>
  );
}
