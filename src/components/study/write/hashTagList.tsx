import { IWrite } from "@allTypes/study";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { UseFormSetValue, UseFormRegisterReturn } from "react-hook-form";

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
  const [hashTags, setHashTags] = useState<string[]>(defaultValue);
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

  return (
    <label className="grid grid-cols-[1fr_3fr] gap-[2.6rem]">
      <h3 className="Sub2 cursor-pointer hover:text-primary-500">{label}</h3>
      <div className="rounded-[0.8rem] border border-primary-200 bg-[#F7F6F6]  text-[1.6rem]   focus:border-primary-400 flex space-x-[1.2rem]">
        <div className="flex space-x-[0.7rem]  items-center">
          {hashTags?.map((tag, index) => (
            <div
              key={index}
              className="flex items-center Sub2 textColor  rounded-full p-[1rem] bg-primary-main h-[4rem] space-x-[0.8rem] hover:bg-[#e46655] cursor-pointer first:ml-[1.4rem]"
              onClick={() => onDelete(index)}
            >
              <span className="text-white Sub2">#{tag}</span>
              <span className="items-center text-white font-[rem]">
                &times;
              </span>
            </div>
          ))}
        </div>
        <input
          className="focus:outline-none  focus:ring-transparent border-none bg-transparent py-[1.8rem] text-[1.6rem] flex-1 placeholder:text-primary-400"
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
