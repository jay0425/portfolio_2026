import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "daisyUI",
    description: "Full-stack CRUD 게시판 개인 프로젝트 (직원 정보 등록/조회/수정/삭제)",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://www.youtube.com/watch?v=Hj9FltPZpcw",
    githubUrl: "https://github.com/jay0425/full-stack-crud",
  },
  {
    title: "YUMMY",
    description:
      "현재 위치 기반 디저트 카페 추천 서비스 (지도/검색/디테일, 블로그 결과 무한 스크롤)",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Redux", "Kakao Open API", "Infinite Scroll", "Netlify"],
    liveUrl: "https://yummy-web.netlify.app/",
    githubUrl: "https://github.com/jay0425/react-team11-project",
  },
  {
    title: "GEPPETTO",
    description: "동물 커뮤니티 플랫폼 (추천 콘텐츠 슬라이드, 게시글 최신/인기순 정렬)",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vite", "React", "Tailwind CSS", "Zustand", "PocketBase", "Swiper"],
    liveUrl: "https://geppetto88.netlify.app/",
    githubUrl: "https://github.com/jay0425/DoIt88-PetSite",
  },
  {
    title: "JAEFLIX",
    description: "영화 소개 웹앱 (TMDB API + React Query 캐싱, 검색/필터/페이지네이션)",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "React Query", "TMDB API", "Swiper", "Pagination", "Netlify"],
    liveUrl: "https://tourmaline-faun-f2c3b7.netlify.app/",
    githubUrl: "https://github.com/jay0425/netflix-demo",
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="h-full flex flex-col justify-center py-16 md:py-24 bg-secondary/30 overflow-y-auto"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Recent Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:glow"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label={`${project.title} live link`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary text-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label={`${project.title} github link`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-xs font-mono text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
