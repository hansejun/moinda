import Icons from "@elements/icon";

const NoStudy = () => {
  return (
    <div className="flex-center h-[100vh] max-h-[38.6rem] w-[100vw] max-w-[50.4rem] flex-col rounded-[1rem] border border-dashed border-primary-200">
      <span className="h-[3.4rem] w-[4rem]">{Icons["16"]}</span>

      <p className="Cap1 pt-[1rem] text-primary-600">
        아래 &apos;스터디 그룹 가입하기&apos; 버튼을 눌러 <br />
        모인다 스터디에 가입해보세요!
      </p>
    </div>
  );
};

export default NoStudy;
