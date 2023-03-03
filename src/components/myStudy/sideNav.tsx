import type { IStudyStatus, TStudyKey } from "@allTypes/studyRoom";
import StudyRoomApi from "@apis/query/studyRoomApi";
import ArrowSvg from "@assets/svg/arrowSvg";
import CircleSvg from "@assets/svg/circleSvg";
import cls from "@utils/client/cls";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface IProps {
  loginUserId: number;
}

const SideNav = ({ loginUserId }: IProps) => {
  const router = useRouter();
  const [isStatusFocus, setIsStatusFocus] = useState(false);
  const [studyStatus, setStudyStatus] = useState<IStudyStatus>(STATUS_BTNS[0]);
  const { id } = router?.query;
  const { data: myStudyData } = StudyRoomApi.ReadStudy(id + "");
  const { mutate: updateStatus } = StudyRoomApi.UpdateStudyStatus(id + "");

  // 스터디 상태 변경
  const handleStudyStatus = useCallback(
    (value: TStudyKey) => {
      updateStatus({ studyStatus: value });
      setStudyStatus(STATUS_BTNS[STATUS_KEYS[value]]);
    },
    [updateStatus]
  );

  useEffect(() => {
    if (myStudyData)
      setStudyStatus(
        STATUS_BTNS[STATUS_KEYS[myStudyData.studyStatus as TStudyKey]]
      );
  }, [myStudyData]);

  return (
    <aside className="col-span-1 col-start-2 flex min-w-[16rem] flex-col space-y-[6.8rem]">
      <nav className="rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
        <ul>
          <li
            className={styles.navItem(Boolean(true))}
            onClick={() => router.push(`/myStudy/${myStudyData?.id}`)}
          >
            그룹 홈
          </li>
          <li
            className={styles.navItem(Boolean(true))}
            onClick={() => router.push(`/myStudy/${myStudyData?.id}/diary`)}
          >
            스터디일지
          </li>
          <li className="flex items-center space-x-[1rem] py-[1.4rem] pl-[3.6rem] text-[1.8rem] font-medium text-primary-500">
            <span>상태</span>
            {myStudyData && myStudyData.studyStatus && (
              <div
                className={cls(
                  `Cap3 flex items-center space-x-[0.5rem] rounded-full border-2  p-[0.3rem_1.2rem] `,
                  studyStatus?.style
                )}
              >
                <span>{studyStatus?.status}</span>
                <CircleSvg color={studyStatus?.color} className="w-[0.8rem]" />
              </div>
            )}
          </li>
        </ul>
      </nav>
      {loginUserId === myStudyData?.userId && (
        <div className="flex flex-col space-y-[1.8rem]">
          <h3 className="H2">스터디 관리</h3>
          <nav className="flex flex-col rounded-[1rem] bg-bgColor-100 py-[2.4rem]">
            <Link href={`/study/${myStudyData?.id}/edit`} passHref>
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
                {STATUS_BTNS.map((btn) => (
                  <button
                    key={btn.status}
                    className={styles.statusBtn(
                      studyStatus?.status === btn.status
                    )}
                    onClick={() => handleStudyStatus(btn.value)}
                    disabled={studyStatus?.status === btn.status}
                  >
                    {btn.status}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </div>
      )}
    </aside>
  );
};

export default SideNav;

const STATUS_KEYS = {
  RECRUIT: 0,
  PROGRESS: 1,
  COMPLETE: 2,
};

const STATUS_BTNS: IStudyStatus[] = [
  {
    status: "모집중",
    color: "#ED7868",
    style: "text-[#ED7868] border-[#ED7868]",
    value: "RECRUIT",
  },
  {
    status: "진행중",
    color: "#4C86EF",
    style: "text-[#4C86EF] border-[#4C86EF]",
    value: "PROGRESS",
  },
  {
    status: "완료",
    color: "#848484",
    style: "text-[#848484] border-[#848484]",
    value: "COMPLETE",
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
