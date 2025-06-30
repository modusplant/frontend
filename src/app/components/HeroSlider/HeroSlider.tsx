"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import SlideControls from "./SlideControls";

const SLIDES = [
  {
    title: "당신의 공간에 스마트 초록빛 평화",
    subtitle: "'모두의식물'에서 함께 가꾸는 특별한 일상을 시작하세요.",
    image: "/img/background.png",
  },
  {
    title: "식물과 함께하는 여유로운 순간들",
    subtitle: "초록이 주는 치유를 경험해보세요.",
    image: "/img/background.png",
  },
];

export default function HeroSlider() {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (pause || !slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [pause, slider]);

  return (
    <section className="relative h-[980px] w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {SLIDES.map((slide, index) => (
          <div className="keen-slider__slide relative h-full w-full" key={index}>
            <Image src={slide.image} alt={slide.title} fill priority className="object-cover" />
            <div className="absolute left-[100px] z-10 flex h-full flex-col justify-center gap-8 text-white">
              <div className="flex items-center gap-10 text-center">
                <h2 className="text-[30px]">ModusPlant</h2>
                <SlideControls
                  currentSlide={currentSlide}
                  totalSlides={SLIDES.length}
                  onPrev={() => slider.current?.prev()}
                  onNext={() => slider.current?.next()}
                  pause={pause}
                  onPauseToggle={() => setPause(prev => !prev)}
                />
              </div>
              <h1 className="mt-3 text-[56px] font-bold leading-snug">{slide.title}</h1>
              <p className="text-[22px]">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
