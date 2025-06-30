import HeroSlider from "@/app/components/HeroSlider/HeroSlider";
import ModusConnect from "@/app/components/ModusConnect/ModusConnect";
import StorySection from "@/app/components/StorySection/StorySection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col gap-[6px] bg-gray-100">
      <Header />
      <HeroSlider />
      <ModusConnect />
      <StorySection />
      <Footer />
    </div>
  );
}
