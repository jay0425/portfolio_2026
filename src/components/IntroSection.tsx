import { ArrowDown } from "lucide-react";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container w-full mx-auto px-6 relative z-10">
        <div className="flex justify-evenly">
          <div className="max-w-3xl">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
              안녕하세요,
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">프론트엔드 개발자</span>
              <br />
              <span className="text-gradient">김재희</span>
              <span className="text-foreground">입니다.</span>
            </h1>

            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-6 animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Next.js · TypeScript 기반으로 실무형 웹을 만드는 프론트엔드 개발자입니다. React
              Query/RHF로 복잡한 폼과 데이터 흐름을 안정적으로 설계하고 단단하게 구현합니다. 소통을
              개발만큼 중요하게 여기며, 근거를 바탕으로 의견을 제시하되 다양한 관점을 경청하며
              합의를 만들어갑니다. 새로운 기술 스택도 두려워하지 않고 꾸준히 학습하며, 팀에 신뢰를
              주는 실행력으로 결과를 만들어냅니다.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#portfolio"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                프로젝트 보기
              </a>
              <a
                href="#about"
                className="px-5 py-2.5 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
              >
                연락하기
              </a>
            </div>
          </div>
          <div className="w-[25rem] rounded-full animate-slide-up">
            <img
              src="/me.JPG"
              alt="Profile"
              className="w-full h-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
