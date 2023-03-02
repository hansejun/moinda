import Icons, { iconBackgrounds } from "@elements/icon";
import cls from "@utils/client/cls";
import Image from "next/image";

const RefuseItem = () => {
  return (
    <li className="flex space-x-[1.5rem] border-b py-[2.4rem] last:border-none">
      <div
        className={cls(
          "flex-center aspect-square h-[4.3rem] w-[4.3rem] rounded-[1rem]",
          iconBackgrounds[16]
        )}
      >
        <Image
          className="w-[3rem]"
          src={Icons[16]}
          alt="icon"
          width={30}
          height={30}
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[1.2rem] text-primary-500">3시간 전</span>
        <p className="Cap2 mb-[0.8rem]">
          [2023 취업 뽀개기] 스터디 가입 요청이 그룹장에 의해 거절되었습니다.
        </p>
        <button className="flex-center Cap3 h-[3.8rem] w-[8.5rem] rounded-[0.4rem] bg-primary-400 text-white transition-colors hover:bg-primary-500">
          확인
        </button>
      </div>
    </li>
  );
};
export default RefuseItem;
