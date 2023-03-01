import Icons from "@elements/icon";
import Image from "next/image";

const NoStudy = () => {
  return (
    <div className="flex-center h-[30vh] max-h-[38.6rem] w-[100vw] max-w-[50.4rem] flex-col space-y-[1rem] rounded-[1rem] border border-dashed border-primary-200">
      <Image
        src={Icons[16]}
        alt="icon"
        width={40}
        height={40}
        priority
        className="w-[4rem]"
      />
      <p className="Cap1 pt-[1rem] text-primary-600">
        아래 &apos;스터디 그룹 가입하기&apos; 버튼을 눌러 <br />
        모인다 스터디에 가입해보세요!
      </p>
    </div>
  );
};

export default NoStudy;
