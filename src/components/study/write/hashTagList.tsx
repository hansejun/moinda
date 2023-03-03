import { IWrite } from "@allTypes/study";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

interface IHashTagProps {
  label: string;
  placeholder?: string;
  setValue: UseFormSetValue<IWrite>;
  defaultValue: string[];

  text?: string;
}

const HashTagList = ({
  label,
  setValue,
  placeholder,
  defaultValue,
}: IHashTagProps) => {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isComposing, setIsComposing] = useState(false);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isComposing) return;
      if (e.key !== "Enter") return;
      if (inputRef && inputRef.current) {
        const value = inputRef.current.value as string;
        setHashTags((prev) => prev.concat(value));
        inputRef.current.value = "";
        e.preventDefault();
      }
    },
    [isComposing]
  );

  const onDelete = useCallback((index: number) => {
    setHashTags((prev) => prev.filter((_, i) => index !== i));
  }, []);

  useEffect(() => {
    setValue("hashTagList", hashTags);
  }, [setValue, hashTags]);

  useEffect(() => {
    setHashTags(defaultValue);
  }, [defaultValue]);
  return (
    <label className="flex flex-col gap-[1rem] nm:grid nm:grid-cols-[1fr_3fr] nm:gap-[2.6rem]">
      <h3 className="Sub2 cursor-pointer hover:text-primary-500">{label}</h3>
      <div className="flex space-x-[1.2rem] rounded-[0.8rem] border  border-primary-200   bg-[#F7F6F6] text-[1.6rem] focus:border-primary-400">
        <div className="flex items-center  space-x-[0.7rem]">
          {hashTags?.map((tag, index) => (
            <div
              key={index}
              className="Sub2 textColor flex h-[4rem]  cursor-pointer items-center space-x-[0.8rem] rounded-full bg-primary-main p-[1rem] first:ml-[1.4rem] hover:bg-[#e46655]"
              onClick={() => onDelete(index)}
            >
              <span className="Sub2 text-white">#{tag}</span>
              <span className="items-center font-[rem] text-white">
                &times;
              </span>
            </div>
          ))}
        </div>
        <input
          className="flex-1  border-none bg-transparent py-[1.8rem] text-[1.6rem] placeholder:text-primary-400 focus:outline-none focus:ring-transparent"
          type="text"
          placeholder={hashTags?.length ? "" : placeholder}
          onKeyDown={onKeyDown}
          ref={inputRef}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          disabled={hashTags.length >= 3}
        />
      </div>
    </label>
  );
};

export default HashTagList;
