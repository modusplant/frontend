"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  pause: boolean;
  onPauseToggle: () => void;
}

export default function SlideControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  pause,
  onPauseToggle,
}: SlideControlsProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>
        {currentSlide + 1} / {totalSlides}
      </span>
      <button onClick={onPrev}>
        <ChevronLeft size={16} />
      </button>
      <button onClick={onNext}>
        <ChevronRight size={16} />
      </button>
      <button onClick={onPauseToggle}>{pause ? <Play size={16} /> : <Pause size={16} />}</button>
    </div>
  );
}
