import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import SkillSection from "@/components/SkillSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="h-screen bg-background overflow-hidden">
      <Header
        onNavigate={(index) => {
          swiperRef.current?.slideTo(index);
        }}
      />

      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        keyboard
        speed={800}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination, Keyboard]}
        className="h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <IntroSection />
        </SwiperSlide>

        <SwiperSlide>
          <SkillSection />
        </SwiperSlide>

        <SwiperSlide>
          <ExperienceSection />
        </SwiperSlide>

        <SwiperSlide>
          <PortfolioSection />
        </SwiperSlide>

        {/* ✅ About + Footer 한 슬라이드 / Footer는 맨 아래 고정 */}
        <SwiperSlide>
          <div className="h-full flex flex-col">
            <AboutSection />
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Index;
