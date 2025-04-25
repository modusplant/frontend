import SigninForm from "@/app/(auth)/signin/_components/SigninForm";
import Image from "next/image";

export const metadata = {
  title: "로그인",
  description: "로그인 페이지",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-white p-5 drop-shadow-md tablet:h-[672px] tablet:w-[640px] tablet:p-[50px]">
        <Image src="/images/modus_plant_logo.png" width={233} height={100} alt="모두의식물 로고" />

        <SigninForm />

        <div className="mt-10 flex items-center gap-5">
          <button className="paragraph_small text-neutral-800">아이디 찾기</button>
          <span> |</span>
          <button className="paragraph_small text-neutral-800"> 비밀번호 재설정</button>
        </div>

        <div className="mt-[50px] flex items-center gap-[30px]">
          <button>
            <Image src="/img/kakao.png" width={45} height={45} alt="카카오 로그인 버튼" />
          </button>
          <button>
            <Image src="/img/google.png" width={45} height={45} alt="구글 로그인 버튼" />
          </button>
        </div>
      </div>
    </div>
  );
}
