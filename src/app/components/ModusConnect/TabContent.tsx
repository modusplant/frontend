"use client";

import { PAGE_LIST } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

interface TabContentProps {
  title: string;
}

export default function TabContent({ title }: TabContentProps) {
  const tabData = PAGE_LIST.find(tab => tab.title === title);

  if (!tabData) return null;

  return (
    <div className="grid grid-cols-3 gap-[15px]">
      {tabData.items.map(({ label, href, image }) => (
        <Link
          key={label}
          href={href}
          className="relative h-[340px] w-[260px] overflow-hidden rounded-xl bg-neutral-100"
        >
          {image ? (
            <Image src={image} alt={label} width={260} height={340} className="object-cover" />
          ) : (
            <div className="h-full w-[260px] bg-gray-300" />
          )}
          <div className="absolute bottom-0 left-0 w-[260px] bg-black/40 p-4 text-white">
            <h3 className="text-lg font-bold">{label}</h3>
            <p className="text-sm">식물 이야기를 나누세요</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
