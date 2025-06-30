"use client";

import { PAGE_LIST } from "@/constants/menu";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import TabContent from "./TabContent";

export default function ModusConnect() {
  const [activeTab, setActiveTab] = useState("소통");

  return (
    <section className="flex h-[915px] w-full flex-col items-center">
      <h1 className="py-24 text-center text-[52px] text-primary-400">⋅ ModusConnect ⋅</h1>
      <div className="-pl-[170px] flex w-full max-w-[1780px] items-center gap-[117px]">
        <div className="flex w-[53px] flex-col items-start">
          {PAGE_LIST.map(({ title }) => (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={clsx(
                "border-l-2 py-2 pl-2 text-xl font-medium transition-colors",
                activeTab === title
                  ? "border-primary-500 text-primary-500"
                  : "border-neutral-400 text-neutral-400 hover:text-neutral-600",
              )}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="flex w-full max-w-[1440px] gap-[146px]">
          <Image alt="" width={484} height={484} src="/img/illust.png" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold text-neutral-800">
                당신의 이야기를 식물로 풍요롭게
              </h2>
              <p className="text-[18px] text-neutral-500">수많은 식물로 매력적인 대화를 나누세요</p>
            </div>
            <TabContent title={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
