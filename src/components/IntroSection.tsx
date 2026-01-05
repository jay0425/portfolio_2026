import { ArrowDown } from "lucide-react";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="h-full flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ✅ text + photo layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* left: text */}
          <div className="max-w-4xl">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
              안녕하세요,
            </p>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">프론트엔드 개발자</span>
              <br />
              <span className="text-gradient">김재희</span>
              <span className="text-foreground">입니다.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up leading-relaxed"
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
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                프로젝트 보기
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
              >
                연락하기
              </a>
            </div>
          </div>

          {/* right: photo card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-3xl border border-border bg-background/40 backdrop-blur-xl shadow-2xl overflow-hidden animate-slide-up">
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

              {/* image */}
              <div className="relative p-3">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/me.JPG"
                    alt="Profile placeholder"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                  {/* top shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                </div>
              </div>
            </div>

            {/* decorative dots */}
            <div className="absolute -z-10 -top-6 -right-6 h-24 w-24 rounded-2xl bg-primary/10 blur-xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
