import { db } from "../../../../firebase/firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { IChat } from "@allTypes/chat";
import Image from "next/image";
import getImageUrl from "@utils/client/getImageUrl";
import Scrollbars from "react-custom-scrollbars-2";

interface IProps {
  roomId: string;
}

const ChatList = ({ roomId }: IProps) => {
  const scrollRef = useRef<Scrollbars>(null);
  const [chats, setChats] = useState<IChat[]>([]);
  const [isMount, setIsMount] = useState(false);
  // 채팅 조회

  const getMessages = useCallback(() => {
    const chatCollection = collection(db, `chatRoom`);
    const roomMessagesQuery = query(
      chatCollection,
      where("roomId", "==", roomId),
      orderBy("createdAt", "desc"),
      limit(20)
    );
    return roomMessagesQuery;
  }, [roomId]);

  useEffect(() => {
    const roomMessagesQuery = getMessages();
    onSnapshot(roomMessagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChats(updatedMessages.reverse() as any);
    });
  }, [getMessages]);

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current?.scrollToBottom();
    }
  }, [chats]);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <div className=" = h-[45vh] max-h-[45vh] w-full flex-1 bg-[#F7F6F6]">
      {isMount && (
        <Scrollbars autoHide ref={scrollRef}>
          <ul className="flex w-full flex-col space-y-[1rem] px-[2.8rem] py-[1.8rem]">
            {chats?.map((chat, idx) => (
              <li className="flex  " key={chat.id}>
                {chat?.avatarImg ? (
                  <Image
                    className="aspect-square h-[2.2rem] w-[2.2rem] rounded-full"
                    src={getImageUrl(chat.avatarImg)}
                    width={22}
                    height={22}
                    alt="profile"
                    priority
                  />
                ) : (
                  <div
                    className="flex-center Cap4 aspect-square w-[2.2rem] cursor-pointer 
              rounded-full bg-[#9DA9B4]"
                  >
                    {chat?.nickname.slice(0, 2)}
                  </div>
                )}
                <p className="mt-[0.2rem] ml-[1.6rem] mr-[0.8rem] whitespace-nowrap text-[1.2rem] font-medium text-primary-500">
                  {chat?.nickname}
                </p>
                <p className="mt-[0.2rem] break-all text-[1.2rem] font-medium">
                  {chat?.message}
                </p>
              </li>
            ))}
          </ul>
        </Scrollbars>
      )}
    </div>
  );
};

export default ChatList;
