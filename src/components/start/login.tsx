import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "allTypes/user";

import Input from "@elements/input";
import ErrorMessage from "@elements/errorMessage";
import Label from "@elements/label";
import { emailValid, passwordValid } from "@utils/client/valids";
import cls from "@utils/client/cls";
import FacebookSvg from "@assets/svg/facebookSvg";
import GoogleSvg from "@assets/svg/googleSvg";
import KakaoSvg from "@assets/svg/kakaoSvg";
import { logIn } from "@apis/query/userApi";
import { useRouter } from "next/router";

const styles = {
  socialWrapper: "flex flex-col items-center",
  socialBtn:
    "aspect-square w-[5.6rem] cursor-pointer rounded-full bg-primary-100",
  socailName: "mt-2 text-[1.3rem] text-primary-500",
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>({ mode: "onChange" });

  // 로그인 기능
  const onValidSubmit = useCallback(
    async (data: ILogin) => {
      try {
        const {
          data: { user },
        } = await logIn(data);

        router.replace("/");
      } catch (e) {
        alert("로그인 실패");
      }
    },
    [router]
  );

  // 카카오 로그인 버튼
  const onClickKakao = useCallback(() => {}, []);

  return (
    <>
      <p className="mt-[5rem] text-center text-[2.6rem] font-bold leading-[3.2rem]">
        같은 목표를 가진 <br />
        스터디원들과 <strong className="text-primary-main">모인다</strong>!
      </p>
      <span className="mt-[1.6rem] mb-[6.2rem] text-center  text-[1.6rem] text-primary-500">
        로그인하면 모든 서비스를 이용할 수 있습니다.
      </span>
      <form
        onSubmit={handleSubmit(onValidSubmit)}
        className="flex flex-col"
        autoComplete="off"
      >
        <Label className="mb-[2.4rem]" label="이메일">
          <Input
            register={{ ...register("email", emailValid()) }}
            type="email"
            placeholder="이메일을 입력해주세요."
          />
          <ErrorMessage text={errors.email?.message} />
        </Label>
        <Label label="비밀번호" className="mb-[4.4rem]">
          <Input
            register={{ ...register("password", passwordValid()) }}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorMessage text={errors.password?.message} />
        </Label>
        <button
          className={cls(
            "rounded-[3rem] bg-primary-main py-[1.8rem] text-[1.6rem]  text-primary-100 transition-colors disabled:bg-[rgba(0,0,0,0.05)] disabled:text-primary-400"
          )}
          disabled={
            (!watch("email") && !watch("password")) ||
            watch("email")?.length < 7 ||
            watch("password")?.length < 7
          }
        >
          이메일로 로그인
        </button>
      </form>
      <ul className="mt-[5.2rem] flex justify-center space-x-[2.4rem]">
        <li className={styles.socialWrapper}>
          <span className={cls(styles.socialBtn, "border")}>
            <GoogleSvg className="" />
          </span>
          <span className={styles.socailName}>Google</span>
        </li>
        <li className={styles.socialWrapper}>
          <span onClick={onClickKakao} className={styles.socialBtn}>
            <KakaoSvg className="" />
          </span>
          <span className={styles.socailName}>Kakao</span>
        </li>
        <li className={styles.socialWrapper}>
          <span className={styles.socialBtn}>
            <FacebookSvg className="" />
          </span>
          <span className={styles.socailName}>Facebook</span>
        </li>
      </ul>
      <span className="mt-[4.6rem] text-center text-[1.5rem] text-primary-600">
        모인다
        <strong
          className="ml-1 cursor-pointer border-b border-primary-600 text-[1.5rem] font-normal hover:border-primary-500 hover:text-primary-500"
          onClick={() => router.push("/start/signup")}
        >
          회원가입
        </strong>
      </span>
    </>
  );
};

export default Login;
