"use client";

import { ArrowRight, Dot, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
          </filter>
        </defs>
      </svg>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-5">
        <header
          id="intro"
          className="min-h-screen flex items-center  relative z-10 isolate"
        >
          <div className="absolute -top-[100vh] flex items-center justify-end -right-[20vw] w-[100vh] h-screen pointer-events-none -z-10">
            <div
              className="w-full blur-[40vw] rounded-full h-full animate-spin animation-duration-[100000ms]
              bg-[conic-gradient(from_0deg,oklch(0.628_0.2577_29.23),oklch(0.8664_0.294827_142.4953),oklch(0.452_0.313214_264.052),oklch(0.628_0.2577_29.23))]"
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2026
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Anay
                  <br />
                  <span className="text-muted-foreground">Sharma</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full Stack Developer crafting scalable applications at the
                  intersection of
                  <span className="text-foreground"> design</span>,
                  <span className="text-foreground"> technology</span>, and
                  <span className="text-foreground"> performance</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <Dot className="size-4" />
                  <div>India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Developer</div>
                  <div className="text-muted-foreground">@ Eulogik</div>
                  <div className="text-xs text-muted-foreground">
                    Dec 2024 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  TECH
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "FastAPI",
                    "PostgreSQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="work" className="min-h-screen py-20 sm:py-32 ">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2023 — 2025
              </div>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {[
                {
                  year: "2024",
                  role: "Software Developer",
                  company: "Eulogik",
                  description:
                    "Building trading and financial software solutions with focus on options strategies and portfolio analytics.",
                  tech: ["React", "FastAPI", "PostgreSQL"],
                },
                {
                  year: "2024",
                  role: "Web Developer",
                  company: "TechIncept",
                  description:
                    "Developed career guidance web app with 2000+ daily active members and ERP systems.",
                  tech: ["React", "TypeScript", "Node.js"],
                },
                {
                  year: "2023",
                  role: "React Developer",
                  company: "Boostup Digital",
                  description:
                    "Debugged and maintained fullstack web apps, guided team of 9 developers.",
                  tech: ["React", "JavaScript", "CSS"],
                },
                {
                  year: "2023",
                  role: "Full Stack Engineer (Freelance)",
                  company: "College360",
                  description:
                    "University search and counseling platform with filtering and application workflows.",
                  tech: ["Next.js", "Express", "MongoDB"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 pb-6 sm:pb-10 border-b"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {job.role}
                      </h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          className="min-h-screen py-20 sm:py-32 "
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Projects & Insights
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "College360",
                  excerpt:
                    "University search and counseling platform with filtering and application workflows.",
                  date: "2024",
                  url: "college360.co.in",
                },
                {
                  title: "Trading Platform (Siya)",
                  excerpt:
                    "Complete trading solution with option chains, market heatmap, and strategy builder similar to Sensibull.",
                  date: "2025",
                  url: "https://app-siya.tempdemo.co/",
                },
                {
                  title: "Portfolio Management System",
                  excerpt:
                    "Order placement system with stop loss and target functionality for consultant-managed trading.",
                  date: "2025",
                  url: "pms.tradefastr.com",
                },
                {
                  title: "Adv. Market Screener (MIS)",
                  excerpt:
                    "Technical screening with pgpool-2 caching and fast data lookup for market analysis.",
                  date: "2025",
                  url: "screener-app.datatokenapi.com",
                },
                {
                  title: "X-Ray",
                  excerpt:
                    "Trading insights with Sharpe ratio, Treynor, Alpha, Beta calculations and portfolio analytics.",
                  date: "2025",
                  url: "xray.datatokenapi.com",
                },
                {
                  title: "DataTokenAPI SSO",
                  excerpt: "Single Sign On for DataTokenAPI App.",
                  date: "2026",
                  url: "auth.datatokenapi.com",
                },
              ].map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 sm:p-8 transition-all duration-500 hover:shadow-lg cursor-pointer cursor-glow-border border"
                >
                  <div className="flex flex-col h-full gap-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Visit</span>
                      <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">
                Let&apos;s Connect
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:anaysharma8791@gmail.com"
                    className="group flex items-center leading-none gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base">anaysharma8791@gmail.com</span>
                    <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14">
                {[
                  {
                    name: "GitHub",
                    handle: "@anaysharma",
                    url: "https://github.com/anaysharma",
                  },
                  {
                    name: "LinkedIn",
                    handle: "anay-sharma",
                    url: "https://www.linkedin.com/in/anay-sharma-b3785321a/",
                  },
                  {
                    name: "Twitter",
                    handle: "@AnaySharma",
                    url: "https://x.com/AnaySharma",
                  },
                  {
                    name: "Email",
                    handle: "anaysharma8791@gmail.com",
                    url: "mailto:anaysharma8791@gmail.com",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="space-y-1">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Anay Sharma. All rights reserved.
              </div>
              <div className="text-[10px] text-muted-foreground">
                Built with Next.js by Me.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
