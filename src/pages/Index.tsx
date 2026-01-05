import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import SkillSection from '@/components/SkillSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Header />
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        keyboard={true}
        speed={800}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Keyboard]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <IntroSection />
        </SwiperSlide>
        <SwiperSlide>
          <SkillSection />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSection />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection />
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Index;
