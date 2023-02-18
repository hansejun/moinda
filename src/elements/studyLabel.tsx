import cls from "@utils/client/cls";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";

interface ILabel {
  type: string;
  label: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  onClick?: () => void;
  src?: string;
  children?: JSX.Element | JSX.Element[];
}

const StudyLabel = ({
  type,
  label,
  register,
  placeholder,
  src,
  onClick,
  children,
}: ILabel) => {
  return (
    <label className={cls(styles.label)}>
      <h3 className={cls(styles.title)}>{label}</h3>
      {type === "input" && (
        <input
          type="text"
          {...register}
          className={cls(styles.input)}
          placeholder={placeholder}
        />
      )}

      {type === "textarea" && (
        <textarea
          {...register}
          className={cls(styles.input, "leading-[2.5rem]")}
          placeholder={placeholder}
          cols={50}
          rows={20}
        />
      )}

      {type === "date" && (
        <div className="flex relative items-center ">{children}</div>
      )}

      {type === "iconBox" && (
        <div onClick={onClick}>
          <div className={cls(styles.iconBox)}>
            {src ? (
              <span className="w-[5rem]">
                <Image src={src} alt="icon" width={60} height={60} />
              </span>
            ) : (
              <>
                아이콘
                <br /> 선택
              </>
            )}
          </div>
        </div>
      )}

      {type === "button" && (
        <div className="grid gap-[1.2rem] grid-cols-[102fr_131fr_138fr_153fr_102fr]">
          {CATEGORIES.map((category) => (
            <div key={category.value}>
              <input
                {...register}
                type="radio"
                className="hidden peer"
                key={category.name}
                value={category.value}
                id={category.value}
              />
              <label
                className={cls(
                  styles.button,
                  "peer-checked:bg-primary-sub1 peer-checked:text-white peer-checked:border-none "
                )}
                htmlFor={category.value}
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </label>
  );
};

export default StudyLabel;

const styles = {
  label: "grid grid-cols-[1fr_3fr] gap-[2.6rem]",
  iconBox:
    "w-[8.8rem] aspect-square border border-primary-200 bg-[#F7F6F6] rounded-[0.8rem] flex-center text-[1.6rem] text-center text-primary-400 cursor-pointer hover:border-primary-400 hover:text-primary-500",
  input:
    "rounded-[0.8rem] border border-primary-200 bg-[#F7F6F6] p-[1.4rem_1.8rem] placeholder:text-primary-400 text-[1.6rem] focus:outline-none  focus:ring-transparent focus:border-primary-400",
  title: "Sub2 cursor-pointer hover:text-primary-500",
  button:
    "flex-center py-[1.4rem] rounded-full bg-[#F7F6F6] border border-primary-200 text-[1.6rem] cursor-pointer ",
};

const CATEGORIES = [
  { name: "어학", value: "LANGUAGE" },
  { name: "취업준비", value: "EMPLOYMENT" },
  { name: "취미, 교양", value: "HOBBY" },
  { name: "고시, 공무원", value: "PUBLIC" },
  { name: "기타", value: "ETC" },
];
