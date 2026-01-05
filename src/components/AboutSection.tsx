import { Mail, Phone, Github, MapPin, GraduationCap } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "heedev94@gmail.com", href: "mailto:jaehee@example.com" },
  { icon: Phone, label: "Phone", value: "010-6601-5240", href: "tel:010-6601-5240" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jay0425",
    href: "https://github.com/jay0425",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </header>

        <div className="max-w-4xl mx-auto">
          <article className="card-gradient border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
              <figure className="shrink-0">
                <img
                  src="/me2.JPG"
                  alt="김재희 프로필 사진"
                  className="w-32 h-32 rounded-2xl object-cover"
                />
              </figure>

              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center md:text-left">
                  김재희 <span className="text-primary font-mono text-lg">(JAEHEE)</span>
                </h3>
                <p className="text-primary font-medium mb-4 text-center md:text-left">
                  Frontend Developer
                </p>
                <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                  새로운 도전을 좋아하고, 협업과 소통을 중요시하며, 함께 성장하는 개발 문화를
                  추구합니다.
                </p>
              </div>
            </div>

            <div className="grid gap-6 mb-10 md:grid-cols-[2fr_1fr]">
              <section className="p-5 bg-secondary/50 rounded-xl" aria-labelledby="education-title">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 id="education-title" className="font-medium text-foreground">
                    Education
                  </h4>
                </div>

                <div className="text-muted-foreground text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />

                      <span className="min-w-0 flex-1 truncate">
                        코멘토 웹개발 직무부트캠프 수료
                      </span>

                      <span className="shrink-0 whitespace-nowrap">2024.06-2024.07</span>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                      <span className="min-w-0 flex-1 truncate">
                        멋쟁이 사자처럼 프론트엔드 6기 수료
                      </span>
                      <span className="shrink-0 whitespace-nowrap">2023.05-2023.09</span>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                      <span className="min-w-0 flex-1 truncate">
                        강남대학교 국제지역학부 전공 · 중앙아시아학 부전공
                      </span>
                      <span className="shrink-0 whitespace-nowrap">2013.03-2019.02</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section
                className="flex flex-col p-5 bg-secondary/50 rounded-xl"
                aria-labelledby="location-title"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 id="location-title" className="font-medium text-foreground">
                    Location
                  </h4>
                </div>
                <span className="text-muted-foreground text-sm">서울특별시 · 경기도 성남시</span>
                <span className="text-muted-foreground text-sm">대한민국</span>
              </section>
            </div>

            <footer className="border-t border-border pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">Contact</h4>

              <address className="not-italic">
                <ul
                  className={[
                    "grid gap-3 sm:gap-4",
                    contactInfo.length === 3 ? "grid-cols-3" : "grid-cols-2",
                  ].join(" ")}
                >
                  {contactInfo.map((item) => (
                    <li key={item.label} className="list-none">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary hover:border-primary/50 border border-transparent transition-all group"
                      >
                        <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
                        <span className="text-xs text-muted-foreground mb-1">{item.label}</span>
                        <span className="text-xs font-mono text-foreground truncate max-w-full">
                          {item.value.replace("https://", "")}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
