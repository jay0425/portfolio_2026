import { useEffect, useMemo, useRef, useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js 15",
        level: 90,
        description:
          "App Router 실무 라우팅(Params/SearchParams) + 미들웨어 인증 가드(redirect) + URL 상태 동기화 훅 구현 등을 할 수 있습니다.",
      },
      {
        name: "React 19",
        level: 95,
        description:
          "복잡한 화면을 재사용 컴포넌트/훅으로 분리, 상태/이벤트 흐름 정리, UX 디테일(hover/transition/lock)까지 구현 등을 할 수 있습니다.",
      },
      {
        name: "TypeScript",
        level: 90,
        description:
          "도메인 타입 설계·정리, 제네릭/유틸 타입으로 폼·테이블 타입 안정성 확보, API 요청/응답 타입 등을 맞출 수 있습니다.",
      },
      {
        name: "TanStack Query v5",
        level: 85,
        description:
          "목록/상세 캐시 설계, mutate 후 invalidate/replace로 UI 즉시 반영, 공통 캐시 유틸로 패턴 표준화 등을 할 수 있습니다.",
      },
      {
        name: "React Hook Form",
        level: 85,
        description:
          "등록/수정/삭제 CRUD 폼 구성, watch 기반 조건부 UI, 필수값/정규식 검증 및 제출 전 데이터 정리(deepClean) 등을 할 수 있습니다.",
      },
      {
        name: "Zustand",
        level: 80,
        description:
          "전역 상태(로그인한 유저 정보) 설계, 페이지 간 공유 상태를 단순화하고 컴포넌트 결합도 낮추기 등을 할 수 있습니다.",
      },
    ],
  },
  {
    category: "Styling",
    items: [
      {
        name: "Tailwind CSS",
        level: 90,
        description:
          "반응형 레이아웃/그리드 구성, 컴포넌트 단위 스타일 규칙화(cva/variant), 인터랙션 중심 UI 디테일 구현을 할 수 있습니다.",
      },
      {
        name: "HTML5/CSS",
        level: 95,
        description:
          "시맨틱 태그 기반 마크업, 접근성(focus-visible) 고려, 레이아웃 이슈(span/p 등) 원인 파악·수정을 할 수 있습니다.",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        level: 90,
        description:
          "브랜치 운영/병합/충돌 해결, stash 활용, 협업 커밋/히스토리 정리 등을 할 수 있습니다.",
      },
      {
        name: "Bitbucket",
        level: 90,
        description: "레포/브랜치 관리, PR 생성·리뷰 프로세스 사용 등을 할 수 있습니다.",
      },
      {
        name: "Notion",
        level: 95,
        description: "공공 api 및 데이터 정리 및 공유, 개발 회의 문서화할 수 있습니다.",
      },
      {
        name: "VS Code",
        level: 95,
        description: "프로젝트 환경에 맞춘 개발 세팅을 할 수 있습니다.",
      },
      {
        name: "Figma",
        level: 50,
        description: "컴포넌트 스펙 확인, 간격/타이포/상태값을 UI로 정확히 반영할 수 있습니다.",
      },
    ],
  },
];

type Skill = { name: string; level: number; description: string };

interface SkillItemProps {
  skill: Skill;
  onEnter: (skill: Skill) => void;
  onLeave: () => void;
}

const SkillItem = ({ skill, onEnter, onLeave }: SkillItemProps) => {
  return (
    <button
      type="button"
      className="w-full text-left relative rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onMouseEnter={() => onEnter(skill)}
      onMouseLeave={onLeave}
      onFocus={() => onEnter(skill)}
      onBlur={onLeave}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
      </div>

      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </button>
  );
};

const SkillDetailPanel = ({
  skill,
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  skill: Skill | null;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const content = useMemo(() => {
    if (!skill) {
      return {
        title: "Hover a skill",
        levelText: "—",
        desc: "스킬에 마우스를 올리면 상세 설명이 여기에 표시됩니다.",
        level: 0,
        percentText: "—",
      };
    }
    return {
      title: skill.name,
      levelText: `Level ${skill.level}%`,
      desc: skill.description,
      level: skill.level,
      percentText: `${skill.level}%`,
    };
  }, [skill]);

  return (
    <div
      className="relative w-full min-h-[170px] md:min-h-[150px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={[
          "absolute inset-0",
          "grid gap-3",
          "rounded-2xl border border-border bg-popover shadow-2xl p-5 outline-none",
          "transition-all duration-200 ease-out will-change-[transform,opacity]",
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="flex items-center gap-4">
          <h4 className="text-base font-semibold text-foreground">{content.title}</h4>
          <p className="mt-1 text-xs text-muted-foreground font-mono">{content.levelText}</p>
        </div>

        <div className="rounded-xl border border-border/60 bg-background/40 p-4 min-h-21">
          <p className="text-sm leading-relaxed">{content.desc}</p>
        </div>
      </div>
    </div>
  );
};

const SkillSection = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openWithSkill = (skill: Skill) => {
    cancelClose();
    setActiveSkill(skill);
    setOpen(true);
  };

  const closeSoon = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    return () => cancelClose();
  }, []);

  return (
    <section
      id="skills"
      className="h-full w-full flex flex-col items-center justify-center py-16 md:py-24"
    >
      <div className="flex flex-col mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-primary font-mono text-sm mb-2">스킬 위에 마우스를 올려 봐주세요</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skillGroup, idx) => (
              <div
                key={skillGroup.category}
                className="card-gradient border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:glow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {skillGroup.category}
                </h3>

                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <SkillItem
                      key={skill.name}
                      skill={skill}
                      onEnter={openWithSkill}
                      onLeave={closeSoon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SkillDetailPanel
            skill={activeSkill}
            open={open}
            onMouseEnter={cancelClose}
            onMouseLeave={closeSoon}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
