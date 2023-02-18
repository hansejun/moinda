import CancelSvg from "@assets/svg/cancelSvg";
import Icons, { TNumber } from "@elements/icon";
import cls from "@utils/client/cls";
import Image from "next/image";
import { useCallback } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IIconModal {
  register: UseFormRegisterReturn;
  onClose: () => void;
}

const IconModal = ({ register, onClose }: IIconModal) => {
  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <div
      className="fixed right-0 left-0 bottom-0 top-0 bg-[rgba(0,0,0,0.3)] z-[999] flex-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[30rem] h-[29rem] rounded-[1rem] p-[1.8rem] flex flex-col justify-between"
        onClick={onClick}
      >
        <div className="relative flex items-center">
          <h3 className="text-center  w-full Cap3">대표 아이콘 선택</h3>
          <span className="absolute right-0 cursor-pointer" onClick={onClose}>
            <CancelSvg className="w-[2rem]  hover:text-primary-500" />
          </span>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 gap-[1rem] ">
          {Array(20)
            .fill(1)
            .map((item, i) => (
              <div key={item + i} className="flex-center">
                <input
                  {...register}
                  type="radio"
                  className="hidden peer"
                  value={item + i}
                  id={item + i + ""}
                  onChangeCapture={onClose}
                />
                <label
                  htmlFor={item + i + ""}
                  className={cls(
                    "peer-checked:border-primary-sub1 peer-checked:border p-[0.5rem] rounded-[1rem] hover:border border-primary-400 cursor-pointer"
                  )}
                >
                  <Image
                    src={Icons[(item + i) as TNumber]}
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IconModal;
