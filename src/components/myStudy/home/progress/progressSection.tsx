import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import LineProgressBar from "../../../../elements/lineProgressBar";

const SettingTime = dynamic(
  () => import("@components/myStudy/home/progress/settingTime")
);

const ProgressSection = () => {
  const [isSetting, setIsSetting] = useState(false);
  const onClickSetting = useCallback(() => {
    setIsSetting((prev) => !prev);
  }, []);
  return (
    <section className="relative rounded-[1rem] bg-bgColor-100">
      <LineProgressBar onClick={onClickSetting} />
      {isSetting && (
        <div className="absolute right-[3rem] top-[6rem] flex w-[30rem] flex-col space-y-[2.6rem] ">
          <SettingTime onCloseModal={onClickSetting} />
        </div>
      )}
    </section>
  );
};

export default ProgressSection;
