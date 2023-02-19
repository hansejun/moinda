import { IPageProps } from "@allTypes/props";
import { IWrite } from "@allTypes/study";
import studyApi from "@apis/query/studyApi";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import StartDatePicker from "@components/study/write/datePicker";
import HashTagList from "@components/study/write/hashTagList";
import IconModal from "@components/study/write/iconModal";
import Icons from "@elements/icon";
import StudyLabel from "@elements/studyLabel";
import withSessionSsr from "@utils/client/withSessionSsr";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

/** 스터디 개설 페이지 */
const Write: NextPage = ({ loginUser }: IPageProps) => {
  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<IWrite>({
      mode: "onChange",
    });
  const router = useRouter();
  const [iconMode, setIconMode] = useState(false);

  const onValid = useCallback(
    async (data: IWrite) => {
      try {
        const { id } = await studyApi.AddStudy(data);
        router.replace(`/study/${id}`);
      } catch (e) {
        console.log(e);
        return;
      }
    },
    [router]
  );
  return (
    <Layout loginUser={loginUser}>
      <CustomHead title="스터디 개설" />
      <main className="grid grid-cols-[1fr_4fr_1fr] py-[5rem]  ">
        <form
          onSubmit={handleSubmit(onValid)}
          className="col-start-2  flex flex-col space-y-[2.4rem]"
        >
          <StudyLabel
            type="iconBox"
            label="대표아이콘"
            onClick={() => setIconMode(true)}
            src={Icons[watch("icon")]}
          />
          <StudyLabel
            register={{ ...register("title", { required: true }) }}
            type="input"
            label="모집글 제목"
            placeholder="오전 9시 출석! 취업을 위한 열공 스터디를 모집합니다."
          />
          <StudyLabel
            type="input"
            register={{
              ...register("studyName", { required: true, maxLength: 25 }),
            }}
            label="스터디 이름"
            placeholder="2023 취뽀 스터디 25자 제한"
          />
          <StudyLabel
            register={{ ...register("category", { required: true }) }}
            type="button"
            label="스터디 분야"
          />
          <StudyLabel
            register={{ ...register("tel", { required: true }) }}
            type="input"
            label="연락 수단"
            placeholder="링크를 붙여넣거나 휴대폰 번호를 적어주세요."
          />
          <HashTagList
            label="해시태그"
            placeholder="#취업 #출석체크 #주5회출석 "
            setValue={setValue}
            defaultValue={getValues("hashTagList") || []}
          />
          <StudyLabel
            register={{ ...register("startDate", { required: true }) }}
            type="date"
            label="스터디 시작일"
          >
            <StartDatePicker setValue={setValue} />
          </StudyLabel>

          <StudyLabel
            register={{
              ...register("content", { required: true, maxLength: 3000 }),
            }}
            type="textarea"
            label="스터디 내용"
            placeholder="링크를 붙여넣거나 휴대폰 번호를 적어주세요."
          />
          <div className="grid grid-cols-[1fr_3fr] gap-[2.6rem]">
            <p className="col-start-2 text-right mt-[-1rem] text-[1.2rem]">
              {watch("content")?.length}/3000
            </p>
          </div>
          <div className="grid grid-cols-[1fr_3fr] gap-[2.6rem] rounded-full ">
            <button className="col-start-2 bg-primary-main text-white Sub2 py-[2rem] rounded-full">
              스터디 모집 글 작성롼료
            </button>
          </div>
        </form>
        {iconMode && (
          <IconModal
            register={{ ...register("icon", { required: true }) }}
            onClose={() => setIconMode(false)}
          />
        )}
      </main>
    </Layout>
  );
};
export default Write;

export const getServerSideProps = withSessionSsr({});
