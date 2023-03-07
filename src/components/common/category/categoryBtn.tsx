import cls from "@utils/client/cls";
import { useRecoilState } from "recoil";
import { studyCategoryAtom } from "@atoms/studyAtom";
import { ICATEGORIES } from "@allTypes/study";

const CategoryBtn = () => {
  const [category, setCategory] = useRecoilState(studyCategoryAtom);

  return (
    <div className="mt-[4.6rem]  flex flex-col">
      {CATEGORIES.map((cate) => (
        <div
          key={cate.value}
          onClick={() => setCategory(cate.value)}
          className={cls(
            "H3 h-[5.4rem] cursor-pointer py-[1.4rem] px-[3.6rem]",
            cate.value === category
              ? "rounded-full bg-primary-500 text-primary-100"
              : " text-primary-600"
          )}
        >
          {cate.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryBtn;

const CATEGORIES: ICATEGORIES[] = [
  { value: "TOTAL", name: "전체" },
  { value: "LANGUAGE", name: "어학" },
  { value: "EMPLOYMENT", name: "취업 준비" },
  { value: "HOBBY", name: "취미, 교양" },
  { value: "PUBLIC", name: "고시, 공무원" },
  { value: "ETC", name: "기타" },
];
