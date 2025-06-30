import Image from "next/image";

function Footer() {
  return (
    <div className="flex h-[264px] items-center justify-center bg-[#dddddd]">
      <div className="flex w-[433px] flex-col items-center gap-[30px]">
        <Image src="/img/footer_logo.png" width={193} height={40} alt="Footer Image" />
        <div className="paragraph_large mb-5 flex h-[13px] w-full items-center justify-between text-neutral-600">
          <p>사이트 소개</p>
          <p>건의/버그 제보</p>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div>
        <p className="flex h-[11px] items-center text-[15px] font-normal text-[#999999]">
          © 2025. 모두의식물. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
