"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const QNA_LIST = [
  {
    image: "/img/story.png",
    title: "분갈이 시기, 정확히 언제가 적절할까요?",
    desc: "안녕하세요, 식물 키운 지 1년 정도 됐는데, 슬슬 분갈이를 해줘야 할 것 같아서요! 뿌리가 화분 밑으로 나오거나 흙이 굳어진 것 같기도 한데, 정확히 분갈이 시기를 어떻게 판단해야 할까요? 혹시 봄이나 가을처럼 특정 계절에 하는 게 좋을까요? 초보자도 쉽게 할 수 있는 분갈이 팁이나 주의사항이 있다면 알려주세요! 어떤 흙이나 화분을 써야 하는지도 궁금합니다.",
  },
  {
    image: "/img/story2.jpg",
    title: "반려 식물과의 사계절",
    desc: "봄 여름 가을 겨울, 식물과 함께한 시간",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
];

const TIP_LIST = [
  {
    image: "/img/story1.jpg",
    title: "식물과의 첫 만남",
    desc: "처음 식물을 들이고 키우며 느꼈던 감정들",
  },
  {
    image: "/img/story2.jpg",
    title: "반려 식물과의 사계절",
    desc: "봄 여름 가을 겨울, 식물과 함께한 시간",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
];

const CHAT_LIST = [
  {
    image: "/img/story1.jpg",
    title: "식물과의 첫 만남",
    desc: "처음 식물을 들이고 키우며 느꼈던 감정들",
  },
  {
    image: "/img/story2.jpg",
    title: "반려 식물과의 사계절",
    desc: "봄 여름 가을 겨울, 식물과 함께한 시간",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
  {
    image: "/img/story3.jpg",
    title: "식물이 준 위로",
    desc: "힘든 날 식물이 주었던 작은 평안",
  },
];

const TABS = [
  { key: "qna", label: "Q&A", list: QNA_LIST },
  { key: "tips", label: "팁", list: TIP_LIST },
  { key: "chat", label: "대화", list: CHAT_LIST },
];

export default function StorySection() {
  const [activeTab, setActiveTab] = useState("qna");
  const currentList = TABS.find(tab => tab.key === activeTab)?.list ?? [];

  return (
    <section className="w-full px-5 py-10">
      <div className="pl-[240px]">
        <div className="mb-[65px] flex items-center justify-between pr-[240px]">
          <div>
            <h2 className="text-[45px] font-bold text-neutral-800">우리들의 식물 이야기</h2>
            <p className="text-xl text-neutral-500">모두의식물의 새로운 이야기를 들어보세요!</p>
          </div>
          <div className="flex gap-[30px] text-2xl font-bold text-neutral-500">
            {TABS.map((tab, index) => (
              <div key={tab.key} className="flex items-center gap-[30px]">
                <button
                  className={`hover:text-neutral-900 ${
                    tab.key === activeTab ? "text-neutral-900" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
                {index < TABS.length - 1 && <span className="text-neutral-300">·</span>}
              </div>
            ))}
            <button className="pl-5 text-2xl">＋</button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {currentList.map((story, i) => (
            <SwiperSlide key={i}>
              <div className="h-[600px] overflow-hidden">
                <div className="relative h-[404px] w-[500px] py-[22px]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    height={360}
                    width={500}
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[30px] pt-[18px]">
                  <h3 className="text-3xl font-bold text-neutral-800">{story.title}</h3>
                  <p className="text-lg text-neutral-900">{story.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
