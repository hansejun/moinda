import type { IStudyStatus } from "@allTypes/studyRoom";
import ArrowSvg from "@assets/svg/arrowSvg";
import CircleSvg from "@assets/svg/circleSvg";
import cls from "@utils/client/cls";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

const SideNav = () => {
  const router = useRouter();
  // const homeMatch = useRouteMatch("/mystudy/:studyId");
  //const diaryMatch = useRouteMatch("/mystudy/:studyId/diary");
  const [isStatusFocus, setIsStatusFocus] = useState(false);
  const [studyStatus, setStudyStatus] = useState<IStudyStatus>(STATUS_BTNS[0]);

  return (
    <aside className="col-span-1 col-start-2 flex min-w-[16rem] flex-col space-y-[6.8rem]">
      <nav className="rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
        <ul>
          <li
            className={styles.navItem(Boolean(true))}
            onClick={() => router.push("/mystudy/1")}
          >
            그룹 홈
          </li>
          <li
            className={styles.navItem(Boolean(true))}
            onClick={() => router.push("/mystudy/1/diary")}
          >
            스터디일지
          </li>
          <li className="flex items-center space-x-[1rem] py-[1.4rem] pl-[3.6rem] text-[1.8rem] font-medium text-primary-500">
            <span>상태</span>
            <div
              className={cls(
                `Cap3 flex items-center space-x-[0.5rem] rounded-full border-2  p-[0.3rem_1.2rem] `,
                studyStatus?.style
              )}
            >
              <span>{studyStatus?.status}</span>
              <CircleSvg color={studyStatus?.color} className="w-[0.8rem]" />
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col space-y-[1.8rem]">
        <h3 className="H2">스터디 관리</h3>
        <nav className="flex flex-col rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
          <Link href={"/edit"} passHref>
            <span className="H3 block  py-[1.4rem] pl-[3.6rem] text-primary-500">
              모집 상세 수정
            </span>
          </Link>
          <button
            className={styles.toggleBtn(!isStatusFocus)}
            onClick={() => setIsStatusFocus((prev) => !prev)}
          >
            <span>상태 설정</span>
            <ArrowSvg
              className={cls(
                "w-[2.2rem] transition-transform duration-300",
                isStatusFocus ? "rotate-90" : "rotate-[-90deg]"
              )}
            />
          </button>
          {isStatusFocus && (
            <div className="flex flex-col pt-[1.2rem] ">
              {STATUS_BTNS.map((value) => (
                <button
                  key={value.status}
                  className={styles.statusBtn(
                    studyStatus?.status === value.status
                  )}
                  onClick={() => setStudyStatus(value)}
                  disabled={studyStatus?.status === value.status}
                >
                  {value.status}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;

const STATUS_BTNS: IStudyStatus[] = [
  {
    status: "모집중",
    color: "#ED7868",
    style: "text-[#ED7868] border-[#ED7868]",
  },
  {
    status: "진행중",
    color: "#4C86EF",
    style: "text-[#4C86EF] border-[#4C86EF]",
  },
  {
    status: "완료",
    color: "#848484",
    style: "text-[#848484] border-[#848484]",
  },
];

const styles = {
  // 상태 설정 안에 있는 버튼들
  statusBtn: (bool: boolean) =>
    cls(
      "Sub2 w-full  px-[3.6rem] py-[1.2rem] text-end last:pb-0",
      bool ? "text-primary-main" : "text-primary-500"
    ),
  // 그룹홈 그룹일지 버튼
  navItem: (bool: boolean) =>
    cls(
      "cursor-pointer py-[1.4rem] pl-[3.6rem]",
      bool
        ? "H3 text-primary-600"
        : "text-[1.8rem] font-medium text-primary-500"
    ),
  // 상태 설정 버튼
  toggleBtn: (bool: boolean) =>
    cls(
      "flex cursor-pointer items-center justify-between  py-[1.4rem] px-[3.6rem]",
      bool
        ? "text-[1.8rem] font-medium text-primary-500"
        : "H3 text-primary-600 border-b border-[rgba(0,0,0,0.05)]"
    ),
};
