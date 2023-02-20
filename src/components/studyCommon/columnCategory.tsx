import { ICATEGORIES } from "@allTypes/study";
import { studyCategoryAtom } from "@atoms/studyAtom";
import cls from "@utils/client/cls";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const ColumnCategory = () => {
  const [category, setCategory] = useRecoilState(studyCategoryAtom);
  return (
    <div className="grid gap-[1.2rem] grid-cols-6 lg:hidden">
      {CATEGORIES?.map((cate) => (
        <button
          key={cate.value}
          className={cls(
            "flex-center py-[1.4rem] rounded-full border text-[1.3rem] nm:text-[1.6rem] cursor-pointer break-all",
            category === cate.value
              ? "bg-primary-main text-white border-none"
              : "bg-[#F7F6F6] border-primary-200 border"
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
