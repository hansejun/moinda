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
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/** 스터디 수정 페이지 */
const EditStudy: NextPage = ({ loginUser }: IPageProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: study } = studyApi.ReadStudyDetail(id as string);

  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<IWrite>({
      mode: "onChange",
    });
  const [iconMode, setIconMode] = useState(false);

  /** 스터디 수정 */
  const onValid = useCallback(
    async (data: IWrite) => {
      try {
        const response = await studyApi.UpdateStudy(id as string, data);
        router.replace(`/study/${response.id}`);
      } catch (e) {
        return;
      }
    },
    [id, router]
  );

  useEffect(() => {
    if (study) {
      setValue("title", study.title);
      setValue("category", study.category);
      setValue("content", study.content);
      setValue("studyName", study?.studyName);
      setValue("icon", study.icon);
      setValue("startDate", study.startDate);
      setValue("tel", study.tel);
      const hashTagList = study?.hashTagList?.map(
        (hashTage) => hashTage?.tagName
      );
      setValue("hashTagList", hashTagList);
    }
  }, [study, setValue]);

  return (
    <Layout loginUser={loginUser}>
      <CustomHead title="스터디 개설" />
      <main className="flex flex-col py-[5rem] nm:grid nm:grid-cols-[1fr_4fr_1fr]  ">
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex  flex-col space-y-[2.4rem] nm:col-start-2"
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
            <StartDatePicker
              setValue={setValue}
              defaultValue={study?.startDate}
            />
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
            <p className="col-start-2 mt-[-1rem] text-right text-[1.2rem]">
              {watch("content")?.length}/3000
            </p>
          </div>
          <div className="flex gap-[2.6rem] rounded-full nm:grid nm:grid-cols-[1fr_3fr] ">
            <button className="Sub2 col-start-2 w-full rounded-full bg-primary-main py-[2rem] text-white">
              스터디 모집 글 작성완료
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
export default EditStudy;

export const getServerSideProps = withSessionSsr({});
