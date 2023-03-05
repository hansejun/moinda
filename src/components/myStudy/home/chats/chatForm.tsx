import { IUser } from "@allTypes/user";
import SmileSvg2 from "@assets/svg/smile2Svg";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../../../firebase/firebase";

interface ISubmit {
  message: "string";
}

interface IProps {
  roomId: string;
  user: IUser;
}

const ChatForm = ({ roomId, user }: IProps) => {
  const { register, handleSubmit, reset } = useForm<ISubmit>();

  // 채팅 전송
  const onValid = async (data: ISubmit) => {
    const messagesCollection = collection(db, `chatRoom`);
    await addDoc(messagesCollection, {
      message: data.message,
      roomId,
      userId: user.id,
      nickname: user.nickname,
      avatarImg: user.avatarImg,
      createdAt: new Date(),
    });
    console.log("전송");
    reset();
  };
  return (
    <form
      className="flex items-center space-x-[1.3rem] px-[1.8rem]"
      onSubmit={handleSubmit(onValid)}
    >
      <SmileSvg2 className="w-[2.5rem]" />
      <input
        {...register("message")}
        type="text"
        placeholder="메시지 작성하기..."
        className="flex-1 border-none p-[1rem] text-[1.3rem] font-medium shadow-[0px_2px_0px_#bababa] placeholder:text-primary-500  focus:ring-transparent"
      />
      <button className="flex-center h-full rounded-lg bg-primary-main px-[1rem] text-[1.3rem] text-primary-100">
        보내기
      </button>
    </form>
  );
};

export default ChatForm;
