"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { PAGE_LIST } from "@/constants/menu";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className="absolute z-10 flex h-[100px] w-full items-center justify-between px-[100px] text-white transition-colors duration-300 hover:bg-white hover:text-[#333333] active:bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-20">
        <Image
          src={isHovered ? "/img/modus_plant_logo.png" : "/img/header_logo.png"}
          alt="logo"
          width={171}
          height={36}
        />
        <ul className="flex gap-20">
          {PAGE_LIST.map(({ title, items }) => (
            <li
              key={title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={clsx(
                  "text-sm transition-colors",
                  openMenu === title ? "border-primary-400 font-bold" : "hover:border-primary-400",
                )}
              >
                {title}
              </button>

              {openMenu === title && (
                <div className="absolute left-1/2 z-10 mt-4 flex w-[164px] -translate-x-1/2 flex-col items-center rounded-[10px] border border-primary-400 bg-white p-4 shadow-lg">
                  {items.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="mx-auto flex h-11 w-full items-center justify-center rounded-md text-center text-sm text-accent-200 transition-colors hover:bg-primary-100 hover:font-bold"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex h-[50px] w-[320px] items-center rounded-[4px] border border-[#BDBDBD] bg-white px-4 py-3">
          <Input
            placeholder="검색어를 입력해 주세요."
            className="h-full border-none p-0 text-[18px] font-medium text-neutral-900 placeholder-neutral-400"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <Image
            src="/icons/search.svg"
            alt="검색 아이콘"
            width={24}
            height={24}
            className="ml-2"
          />
        </div>
        <Link href="/signin">
          <Button className="flex h-[50px] w-[114px] gap-[10px]">
            <Image src="/icons/user.svg" alt="유저아이콘" width={20} height={20} />
            <p>로그인</p>
          </Button>
        </Link>
      </div>
    </header>
  );
}
