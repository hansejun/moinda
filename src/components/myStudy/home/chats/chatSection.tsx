import { ReadMe } from "@apis/query/userApi";
import { useRouter } from "next/router";
import ChatForm from "./chatForm";
import ChatList from "./chatList";

const ChatSection = () => {
  const { data: user } = ReadMe();
  const router = useRouter();
  const { id } = router.query;
  return (
    <section className="flex min-h-[62rem] flex-col rounded-[1rem] bg-bgColor-100 p-[3rem]">
      <h2 className="H2 mb-[1.8rem]">전체 채팅</h2>
      <div className="flex h-full flex-col justify-between space-y-[2.4rem]">
        <ChatList roomId={id as string} />
        <ChatForm roomId={id as string} user={user!} />
      </div>
    </section>
  );
};

export default ChatSection;
