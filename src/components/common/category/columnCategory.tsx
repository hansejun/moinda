import { ICATEGORIES } from "@allTypes/study";
import { studyCategoryAtom } from "@atoms/studyAtom";
import cls from "@utils/client/cls";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ColumnCategory = () => {
  const [category, setCategory] = useRecoilState(studyCategoryAtom);
  return (
    <div className="grid grid-cols-6 gap-[1.2rem] ">
      {CATEGORIES?.map((cate) => (
        <button
          key={cate.value}
          className={cls(
            "flex-center cursor-pointer break-all rounded-full border py-[1.4rem] text-[1.6rem]",
            category === cate.value
              ? "border-none bg-primary-main text-white"
              : "border border-primary-200 bg-[#F7F6F6]"
          )}
          onClick={() => setCategory(cate.value)}
        >
          {cate.name}
        </button>
      ))}
    </div>
  );
};

export default ColumnCategory;

const CATEGORIES: ICATEGORIES[] = [
  { value: "TOTAL", name: "전체" },
  { value: "LANGUAGE", name: "어학" },
  { value: "EMPLOYMENT", name: "취업 준비" },
  { value: "HOBBY", name: "취미, 교양" },
  { value: "PUBLIC", name: "고시, 공무원" },
  { value: "ETC", name: "기타" },
];
