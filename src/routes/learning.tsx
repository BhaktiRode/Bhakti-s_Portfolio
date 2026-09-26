import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  User,
  Send,
  Mail,
  Signpost,
  Wrench,
  Laptop,
  FlaskConical,
  Camera,
  Mountain,
  Heart,
  Star,
  Sparkles,
  Lightbulb,
  Github,
  Code2,
  Database,
  Table2,
  BarChart3,
  BookOpen,
  ArrowRight,
  Bug,
  Search,
  Filter,
  LineChart,
  CheckSquare,
  Paperclip,
  Quote,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning Lab — Bhakti Rode | Bhakti's World" },
      {
        name: "description",
        content:
          "Curiosity turns into knowledge — what Bhakti is currently exploring: GitHub, web development, SQL, data handling and data visualization.",
      },
      { property: "og:title", content: "Learning Lab — Bhakti Rode" },
      {
        property: "og:description",
        content: "The process, tools & technologies, data to insights, and notes to keep learning.",
      },
      { property: "og:url", content: "/learning" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/learning" }],
  }),
  component: LearningPage,
});

const tabs = [
  { n: "01", label: "My Journey", Icon: Signpost, tone: "bg-sage", to: "/journey" as const },
  { n: "02", label: "My Toolkit", Icon: Wrench, tone: "bg-lilac", to: "/skills" as const },
  { n: "03", label: "Project", Icon: Laptop, tone: "bg-butter", to: "/projects" as const },
  { n: "04", label: "Learning Lab", Icon: FlaskConical, tone: "bg-blush", to: "/learning" as const },
  { n: "05", label: "Beyond Code", Icon: Camera, tone: "bg-peach", to: "/beyond" as const },
  { n: "06", label: "Future Horizon", Icon: Mountain, tone: "bg-sky", to: "/future" as const },
  { n: "07", label: "Connect", Icon: Mail, tone: "bg-sage", to: "/connect" as const },
  { n: "08", label: "About Me", Icon: User, tone: "bg-lilac", to: "/about" as const },
];

const exploring = [
  {
    Icon: Github,
    title: "GitHub",
    status: "Currently Exploring",
    tone: "bg-paper-shade",
    tilt: "-rotate-1",
    points: [
      "Learning version control",
      "Creating repositories",
      "Branching & merging",
      "Pushing projects",
    ],
  },
  {
    Icon: Code2,
    title: "Web Development",
    status: "Improving",
    tone: "bg-sage",
    tilt: "rotate-1",
    points: ["Building responsive web pages", "UI/UX practices", "Clean & efficient code"],
  },
  {
    Icon: Database,
    title: "SQL / Databases",
    status: "Practicing",
    tone: "bg-sky",
    tilt: "rotate-1",
    points: ["Writing queries", "Normalization", "Joins & relationships", "Database design"],
  },
  {
    Icon: Table2,
    title: "Data Handling",
    status: "Working With Data",
    tone: "bg-butter",
    tilt: "-rotate-1",
    points: [
      "Collecting & organizing data",
      "Cleaning & transforming data",
      "Managing data efficiently",
      "Working with real datasets",
    ],
  },
  {
    Icon: BarChart3,
    title: "Data Analysis & Visualization",
    status: "Exploring Insights",
    tone: "bg-lilac",
    tilt: "rotate-[0.6deg]",
    points: [
      "Analyzing patterns & trends",
      "Creating charts & graphs",
      "Using data to find insights",
      "Presenting data clearly",
    ],
  },
];

const process = [
  { step: "LEARN", Icon: BookOpen, points: ["Read", "Research", "Understand"] },
  { step: "TRY", Icon: Laptop, points: ["Implement", "Practice", "Experiment"] },
  { step: "BREAK", Icon: FlaskConical, points: ["Make mistakes", "Face errors", "Get stuck"] },
  { step: "FIX", Icon: Wrench, points: ["Debug", "Improve", "Optimize"] },
  { step: "UNDERSTAND", Icon: Lightbulb, points: ["Gain clarity", "Build confidence", "Move forward"] },
];

const tools = [
  { label: "PHP", tone: "bg-sky" },
  { label: "MySQL", tone: "bg-sage" },
  { label: "HTML", tone: "bg-peach" },
  { label: "CSS", tone: "bg-lilac" },
  { label: "JavaScript", tone: "bg-butter" },
  { label: "GitHub", tone: "bg-paper-shade" },
];

const insights = [
  { Icon: Database, label: "Collect Data" },
  { Icon: Filter, label: "Clean & Organize" },
  { Icon: Search, label: "Analyze Patterns" },
  { Icon: LineChart, label: "Visualize Insights" },
  { Icon: Lightbulb, label: "Make Better Decisions" },
];

const remember = [
  "Stay consistent",
  "Be patient with yourself",
  "Practice daily",
  "Ask questions",
  "Keep building",
];

function LearningPage() {
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
          <Link to="/about" className="flex items-center gap-2 text-ink/75 transition-colors hover:text-ink">
            <User className="size-5" /> About
          </Link>
        </nav>

        <Link
          to="/connect"
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
              <span className="flex size-14 items-center justify-center rounded-full bg-blush font-display text-2xl text-ink shadow-card">
                04
              </span>
              <h1 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                LEARNING LAB
              </h1>
              <Sparkles className="size-5 text-ink/45" strokeWidth={1.3} />
              <Lightbulb className="ml-auto size-8 text-ink/40" strokeWidth={1.2} />
            </div>
            <p className="mt-2 font-hand text-base text-accent-foreground/80">
              Curiosity turns into knowledge. <Heart className="inline size-4 text-accent" />
            </p>

            <h2 className="mt-5 inline-block -rotate-1 bg-sage px-6 py-1 font-hand text-base tracking-[0.16em] text-ink shadow-card">
              CURRENTLY EXPLORING
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {exploring.map(({ Icon, title, status, tone, tilt, points }, i) => (
                <article
                  key={title}
                  className={`sticky-card relative ${tone} ${tilt} p-4 ${
                    i === exploring.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="absolute -top-3 left-6 h-5 w-16 -rotate-6 bg-paper/80 shadow-card" />
                  <div className="flex items-start gap-3">
                    <Icon className="mt-1 size-7 shrink-0 text-ink/75" strokeWidth={1.3} />
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
                      <p className="font-hand text-sm text-accent-foreground/80">{status}</p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 font-hand text-sm leading-6 text-ink/85">
                    {points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <blockquote className="relative mt-6 w-fit -rotate-1 bg-paper-shade px-6 py-4 font-hand text-base leading-7 text-ink/85 shadow-card">
              <Quote className="absolute -top-3 -left-2 size-5 text-ink/40" strokeWidth={1.4} />
              The more I explore,
              <br />
              the more I grow.
            </blockquote>
          </section>

          {/* Right page */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-block -rotate-1 bg-sage px-7 py-1.5 font-hand text-base tracking-[0.2em] text-ink shadow-card">
                THE PROCESS
              </h2>
              <Star className="ml-3 inline size-5 text-ink/40" strokeWidth={1.3} />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-ink/30 p-4">
              <div className="grid grid-cols-5 gap-2">
                {process.map(({ step, Icon, points }, i) => (
                  <div key={step} className="relative text-center">
                    <p className="font-hand text-[11px] tracking-[0.08em] text-ink">{step}</p>
                    <Icon className="mx-auto mt-2 size-7 text-ink/70" strokeWidth={1.2} />
                    {i < process.length - 1 ? (
                      <ArrowRight className="absolute top-9 -right-2 size-4 text-ink/40" strokeWidth={1.4} />
                    ) : null}
                    <ul className="mt-3 space-y-1 font-hand text-[11px] leading-5 text-ink/80">
                      {points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <h2 className="inline-block rotate-[0.6deg] bg-peach px-7 py-1.5 font-hand text-base tracking-[0.2em] text-ink shadow-card">
                TOOLS &amp; TECHNOLOGIES
              </h2>
            </div>
            <div className="mt-4 rounded-xl border border-dashed border-ink/30 p-4">
              <ul className="flex flex-wrap items-center justify-center gap-4">
                {tools.map(({ label, tone }) => (
                  <li key={label} className="w-20 text-center">
                    <span
                      className={`sticky-card mx-auto flex size-12 items-center justify-center rounded-xl ${tone} font-hand text-xs text-ink`}
                    >
                      {label.slice(0, 4)}
                    </span>
                    <p className="mt-2 font-hand text-xs text-ink/80">{label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-center">
              <h2 className="inline-block -rotate-[0.6deg] bg-lilac px-7 py-1.5 font-hand text-base tracking-[0.2em] text-ink shadow-card">
                DATA TO INSIGHTS
              </h2>
            </div>
            <div className="mt-4 rounded-xl border border-dashed border-ink/30 p-4">
              <div className="grid grid-cols-5 gap-2">
                {insights.map(({ Icon, label }, i) => (
                  <div key={label} className="relative text-center">
                    <Icon className="mx-auto size-7 text-ink/70" strokeWidth={1.2} />
                    {i < insights.length - 1 ? (
                      <ArrowRight className="absolute top-2 -right-2 size-4 text-ink/40" strokeWidth={1.4} />
                    ) : null}
                    <p className="mt-2 font-hand text-[11px] leading-4 text-ink/80">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <article className="relative -rotate-[0.6deg] bg-paper-shade p-5 shadow-card">
                <h3 className="absolute -top-4 left-4 -rotate-2 bg-blush px-4 py-1 font-hand text-sm tracking-[0.14em] text-ink shadow-card">
                  REMEMBER
                </h3>
                <ul className="mt-4 space-y-2 font-hand text-sm leading-6 text-ink/85">
                  {remember.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <CheckSquare className="mt-0.5 size-4 shrink-0 text-ink/60" strokeWidth={1.4} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <Heart className="mt-2 ml-auto block size-4 text-accent" />
              </article>

              <article className="relative rotate-[0.6deg] border-l-4 border-dashed border-ink/25 bg-paper p-5 shadow-card">
                <Paperclip className="absolute -top-4 left-5 size-7 -rotate-12 text-ink/45" strokeWidth={1.3} />
                <p className="mt-2 font-hand text-base leading-8 text-ink/85">
                  I don&apos;t need to know everything. I just need to keep learning.{" "}
                  <Heart className="inline size-4 text-accent" />
                </p>
                <Bug className="mt-3 size-5 text-ink/35" strokeWidth={1.3} />
              </article>
            </div>
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
