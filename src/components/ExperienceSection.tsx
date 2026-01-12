const techStack = [
  "NextJS",
  "ReactJS",
  "TypeScript",
  "TailwindCSS",
  "TanStack-Query",
  "Zustand",
  "React-Hook-Form",
  "Axios",
  "Mock-Service-Worker",
];

const experienceSections = [
  {
    title: "[공통 레이아웃 / 네비게이션 구축]",
    badge: "Feature",
    items: [
      "헤더(브레드크럼, 유저 정보, 알림) + 사이드바(아코디언 메뉴) 기반의 전체 레이아웃을 설계하고 구현",
      "확장 가능한 메뉴 구조를 적용하여 서비스 확장성을 확보",
    ],
  },
  {
    title: "[근로자 관리 기능]",
    badge: "Feature",
    items: [
      "리스트: 이름 검색(input) 및 부서별 필터링(select) 기능 구현",
      "상세/수정: 근로자 정보 CRUD 완성",
      "등록: 수기 입력과 엑셀 업로드 두 가지 방식 지원",
    ],
    note: "(엑셀 업로드 방식의 경우 SheetJS로 엑셀 파싱 후 화면에서 수정 가능한 UI 제공하여 대량 등록 업무 효율화)",
  },
  {
    title: "[사업장/부서 관리]",
    badge: "Feature",
    items: [
      "사업장 정보 조회 및 사업장 CRUD 구현",
      "이미지 첨부파일 관리 기능(등록/수정/삭제/미리보기) 개발",
      "멀티 사업장 구조 지원: 사업장별 부서 관리 및 계층 구조 반영",
      "부서 정렬 순서 변경 기능 및 결재자 설정 화면 구현",
    ],
  },
  {
    title: "[알림 시스템]",
    badge: "Style",
    items: [
      "비상알림/시스템 안내/공지사항 메뉴의 리스트, 상세, 등록/수정 디자인 화면 구현",
      "MSW로 Mock API 구성하여 백엔드 대기 없이 선행 개발 및 QA 진행",
    ],
  },
  {
    title: "[공통 모듈 및 아키텍처 구축]",
    badge: "Feature",
    items: [
      "타입 정의 및 유틸 함수(데이터 정규화, 포맷 변환, 파일 업로드, 탄스택쿼리의 데이터 더티 등)",
      "커스텀 훅(브레드크럼 경로 추적, URL 쿼리 파라미터 관리, 라우팅 등)",
      "전역 상태 관리(유저 정보, 회사 정보 스토어)",
      "Constants 관리로 정적 데이터 중앙화",
    ],
    outro: "등을 통하여 표준화된 패턴 적용으로 코드 중복을 최소화하고 유지보수성을 개선했습니다.",
    fullWidth: true,
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="h-full px-10 flex items-center bg-gradient-to-br from-background via-secondary/20 to-background relative"
    >
      <div className="container px-6 relative z-10">
        <div className="text-center space-y-3">
          <div className="text-center mb-6">
            <p className="text-primary font-mono text-sm mb-2">Recent Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work Experience</h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <article className="group relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-5 md:p-7 shadow-2xl shadow-black/5 hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500">
            <div className="w-full flex flex-col gap-4 h-900:flex-row h-900:justify-between">
              <header className="shrink-0">
                <div className="grid gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-6">
                      <div className="flex gap-3">
                        <h3 className="text-2xl font-bold text-foreground">굿데이 소프트</h3>
                        <span className="flex items-center rounded-full bg-primary/5 px-3 py-0.5 text-xs font-bold text-primary border border-primary/20">
                          스타트업
                        </span>
                      </div>
                      <p className="text-sm font-mono text-muted-foreground">B2B · SaaS · 노무</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold text-foreground">
                      프론트엔드 개발자 주임 연구원
                    </p>
                    <p className="text-sm text-muted-foreground">2025.05 - 2025.12 · 8개월</p>{" "}
                  </div>
                </div>
              </header>

              <div className="w-full flex flex-wrap gap-2 h-900:w-[31.25rem] h-900:justify-center">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="group/tag px-2.5 py-1 rounded-full border border-border text-[0.688rem] font-mono text-muted-foreground bg-background/40 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-6 grid-cols-3 h-900:grid-cols-5 text-[0.813rem] text-muted-foreground leading-5">
              {experienceSections.map((section, index) => (
                <div
                  key={section.title}
                  className={[
                    "group/card relative bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300",
                    section.fullWidth ? "col-span-2 h-900:col-span-1" : "",
                  ].join(" ")}
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-semibold text-foreground mb-2 pr-6 group-hover/card:text-primary transition-colors">
                      {section.title}
                    </h4>
                    <span className="inline-flex h-5.5 items-center rounded-full border border-border bg-background/70 px-2 text-[10px] font-mono text-muted-foreground">
                      {section.badge}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2 group/item">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 group-hover/item:bg-primary group-hover/item:scale-125 shrink-0 transition-all duration-300" />
                        <span className="group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="mt-2 text-[0.75rem] rounded-2xl p-2 bg-black/5 border border-border/50 hover:text-foreground transition-colors">
                      {section.note}
                    </p>
                  )}
                  {section.outro && <p className="mt-2 h-900:hidden">{section.outro}</p>}
                </div>
              ))}
            </div>
            <hr className="w-full h-[0.05rem] border border-t-1 border-border/50 my-5" />
            <p className="w-full text-sm text-center italic">
              공통 레이아웃·CRUD·파일첨부·엑셀 업로드·알림 UI 등을 구현하고, 공통 모듈/아키텍처로
              표준화해 개발 효율과 유지보수성을 끌어올렸습니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
