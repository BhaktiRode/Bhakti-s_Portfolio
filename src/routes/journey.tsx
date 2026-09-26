import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  User,
  Send,
  Mail,
  Signpost,
  Code2,
  Wrench,
  Laptop,
  FlaskConical,
  Camera,
  Mountain,
  Sparkles,
  Leaf,
  Heart,
  GraduationCap,
  Trophy,
  Rocket,
  Send as PaperPlane,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — Bhakti's World" },
      {
        name: "description",
        content:
          "A handwritten timeline of Bhakti's journey from 2022 to today: curiosity, learning, building and growing.",
      },
      { property: "og:title", content: "My Journey — Bhakti's World" },
      {
        property: "og:description",
        content: "A notebook timeline of milestones, passions discovered and projects built.",
      },
      { property: "og:url", content: "/journey" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: JourneyPage,
});

const tabs = [
  { n: "01", label: "My Journey", Icon: Signpost, tone: "bg-sage", to: "/journey" as const },
  { n: "02", label: "My Toolkit", Icon: Wrench, tone: "bg-lilac", to: "/skills" as const },
  { n: "03", label: "Project", Icon: Laptop, tone: "bg-butter", to: "/projects" as const },
  { n: "04", label: "Learning Lab", Icon: FlaskConical, tone: "bg-blush", to: "/learning" as const },
  { n: "05", label: "Beyond Code", Icon: Camera, tone: "bg-peach", to: "/beyond" as const },
  { n: "06", label: "Future Horizon", Icon: Mountain, tone: "bg-sky", to: "/future" as const },
  { n: "07", label: "Connect", Icon: Mail, tone: "bg-sage", to: "/connect" as const },
];

const milestones = [
  {
    year: "2022",
    chip: "bg-blush",
    dot: "bg-blush",
    title: "Started My Journey",
    text: "Stepped into the world of technology with curiosity and excitement.",
    Icon: PaperPlane,
  },
  {
    year: "2023",
    chip: "bg-butter",
    dot: "bg-butter",
    title: "Discovered My Passion",
    text: "Found my interest in web development and problem solving.",
    Icon: GraduationCap,
  },
  {
    year: "2024",
    chip: "bg-sage",
    dot: "bg-sage",
    title: "Learning & Growing",
    text: "Explored new technologies, worked on projects and kept improving.",
    Icon: Laptop,
  },
  {
    year: "2025",
    chip: "bg-lilac",
    dot: "bg-lilac",
    title: "Building & Creating",
    text: "Built real-world projects, gained experience and kept pushing my limits.",
    Icon: Trophy,
  },
  {
    year: "2026 & Beyond",
    chip: "bg-sky",
    dot: "bg-sky",
    title: "The Future Awaits",
    text: "More goals, more learning, more dreams to turn into reality.",
    Icon: Rocket,
  },
];

function JourneyPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 py-6 md:px-10"
      style={{ backgroundImage: `url(${deskBg})` }}
    >
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <Link to="/" className="font-display text-4xl leading-none text-ink md:text-5xl">
            Bhakti&apos;s World
          </Link>
          <p className="font-hand text-xs tracking-[0.28em] text-muted-foreground">
            EXPLORE • LEARN • CREATE <span className="text-accent">♡</span>
          </p>
        </div>

        <nav className="flex items-center gap-7 font-hand text-lg">
          <Link to="/" className="flex items-center gap-2 text-ink/75 transition-colors hover:text-ink">
            <Home className="size-5" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-ink/75 transition-colors hover:text-ink"
          >
            <User className="size-5" /> About
          </Link>
        </nav>

        <Link
          to="/"
          hash="connect"
          className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-hand text-lg text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s Connect <Send className="size-4" />
        </Link>
      </header>

      <div className="relative mx-auto mt-8 flex max-w-7xl gap-2">
        <div data-book-shell className="relative grid flex-1 gap-2 rounded-3xl bg-sand/70 p-3 shadow-paper md:grid-cols-2 md:p-4 md:h-[980px]">
          {/* Left page */}
          <section className="paper-page relative rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-blush font-hand text-xl text-ink shadow-card">
                01
              </span>
              <h1 className="ink-underline font-display text-5xl tracking-wide text-ink md:text-6xl">
                MY JOURNEY
              </h1>
              <Sparkles className="size-6 text-ink/50" strokeWidth={1.3} />
            </div>

            <p className="mt-8 max-w-md font-hand text-lg leading-9 text-ink/85">
              Every step I take, every challenge I face, shapes the person I am today.
              <br />
              Here&apos;s a timeline of my journey so far…{" "}
              <Heart className="inline size-4 text-accent" />
            </p>

            <blockquote className="relative mt-12 w-64 -rotate-2 bg-sage p-7 font-hand text-lg leading-9 text-ink shadow-card">
              <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-paper-shade/80 shadow-card" />
              &ldquo;A journey of Curiosity, Learning &amp; Growth
              <Leaf className="mt-3 size-6 text-ink/60" strokeWidth={1.3} />
            </blockquote>

            <div className="relative mt-12 w-64 rotate-1 bg-paper-shade p-6 shadow-card">
              <span className="absolute -top-3 left-8 h-6 w-20 -rotate-3 bg-paper/80 shadow-card" />
              <h2 className="ink-underline inline-block font-hand text-base tracking-[0.15em] text-ink">
                NOTE TO SELF
              </h2>
              <p className="mt-4 font-hand text-base leading-8 text-ink/85">
                Keep learning, keep growing, keep going.
              </p>
            </div>

            <article className="relative mt-10 w-full max-w-md -rotate-[0.4deg] bg-lilac p-6 shadow-card">
              <span className="absolute -top-3 left-10 h-6 w-24 rotate-2 bg-paper/80 shadow-card" />
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-7 shrink-0 text-ink/65" strokeWidth={1.3} />
                <div>
                  <h2 className="ink-underline inline-block font-display text-2xl tracking-wide text-ink">
                    EDUCATION
                  </h2>
                  <div className="mt-4 space-y-4 font-hand text-sm leading-6 text-ink/85">
                    <div>
                      <p className="font-display text-lg text-ink">2023 – 2026 · B.Sc. Computer Science</p>
                      <p>Suryadatta College of Management, Information and Technology</p>
                      <p className="mt-1">Completed with <strong>9.52 CGPA</strong>.</p>
                    </div>
                    <div>
                      <p className="font-display text-lg text-ink">2026 – 2028 · M.Sc. AI &amp; Data Science</p>
                      <p>Indira University — School of Information Technology</p>
                      <p className="mt-1">Currently pursuing postgraduate studies in AI, data science and related technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <Mountain className="mt-8 ml-auto size-14 text-ink/25" strokeWidth={1} />
          </section>

          {/* Right page — timeline */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <ol className="relative space-y-10 border-l-2 border-dashed border-ink/25 pl-8">
              {milestones.map(({ year, chip, dot, title, text, Icon }) => (
                <li key={year} className="relative">
                  <span
                    className={`absolute -left-[41px] top-2 size-4 rounded-full ${dot} ring-2 ring-ink/30`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-block rounded-full ${chip} px-4 py-1 font-hand text-sm text-ink`}
                      >
                        {year}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-ink">{title}</h3>
                      <p className="mt-2 max-w-xs font-hand text-base leading-7 text-ink/80">
                        {text}
                      </p>
                    </div>
                    <Icon className="mt-6 size-10 shrink-0 text-ink/45" strokeWidth={1.1} />
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Notebook tabs */}
        <nav aria-label="Notebook sections" className="hidden w-28 flex-col gap-2 pt-16 lg:flex">
          {tabs.map(({ n, label, Icon, tone, to }) => (
            <Link
              key={n}
              to={to}
              className={`sticky-card flex items-center gap-2 rounded-r-xl ${tone} py-2.5 pr-2 pl-3 font-hand text-[11px] leading-tight tracking-wide text-ink hover:translate-x-1`}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-paper/80 text-[10px] text-ink/80">
                {n}
              </span>
              <Icon className="size-4 shrink-0 text-ink/75" strokeWidth={1.4} />
              <span className="truncate">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
