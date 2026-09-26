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
  Sparkles,
  Heart,
  Lightbulb,
  Leaf,
  Code2,
  Paintbrush,
  Coffee,
  Braces,
  Database,
  Github,
  BarChart3,
  LineChart,
  Table2,
  PieChart,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "My Toolkit — Bhakti's World" },
      {
        name: "description",
        content:
          "A notebook page of the tools, languages and skills Bhakti is learning, using and exploring — HTML, CSS, Java, Python, SQL and more.",
      },
      { property: "og:title", content: "My Toolkit — Bhakti's World" },
      {
        property: "og:description",
        content: "The tools I use to turn ideas into reality.",
      },
      { property: "og:url", content: "/skills" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: ToolkitPage,
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

const tools = [
  {
    name: "HTML",
    Icon: Code2,
    tone: "bg-butter",
    tilt: "-rotate-1",
    desc: "Structuring the web with semantic & meaningful markup.",
  },
  {
    name: "CSS",
    Icon: Paintbrush,
    tone: "bg-blush",
    tilt: "rotate-1",
    desc: "Styling the web and bringing designs to life.",
  },
  {
    name: "Java",
    Icon: Coffee,
    tone: "bg-sky",
    tilt: "rotate-1",
    desc: "Object-oriented programming and building logic.",
  },
  {
    name: "Python",
    Icon: Braces,
    tone: "bg-lilac",
    tilt: "-rotate-1",
    desc: "Writing clean code and solving problems step by step.",
  },
  {
    name: "SQL",
    Icon: Database,
    tone: "bg-sage",
    tilt: "-rotate-1",
    desc: "Working with data and managing information.",
  },
];

function ToolkitPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 py-6 md:px-10"
      style={{ backgroundImage: `url(${deskBg})` }}
    >
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <Link to="/" className="font-display text-4xl leading-none text-ink md:text-5xl">
            Bhakti's World
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
          Let's Connect <Send className="size-4" />
        </Link>
      </header>

      <div className="relative mx-auto mt-8 flex max-w-7xl gap-2">
        <div data-book-shell className="relative grid flex-1 gap-2 rounded-3xl bg-sand/70 p-3 shadow-paper md:grid-cols-2 md:p-4 md:h-[980px]">
          {/* Left page */}
          <section className="paper-page relative rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-blush font-hand text-xl text-ink shadow-card">
                02
              </span>
              <h1 className="ink-underline font-display text-5xl tracking-wide text-ink md:text-6xl">
                MY TOOLKIT
              </h1>
              <Sparkles className="size-6 text-ink/50" strokeWidth={1.3} />
            </div>

            <p className="mt-6 max-w-md font-hand text-base leading-8 text-ink/85">
              A collection of tools, languages &amp; skills
              <br />
              I&rsquo;m learning, using &amp; exploring.{" "}
              <Heart className="inline size-4 text-accent" />
            </p>

            <div className="relative mt-8 w-72 -rotate-2 bg-paper-shade p-5 font-hand text-base leading-8 text-ink shadow-card">
              <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-paper/80 shadow-card" />
              Every tool I learn, brings me one step closer to building my ideas.
              <Heart className="mt-1 ml-auto block size-5 text-ink/40" strokeWidth={1.3} />
            </div>

            <div className="mt-8 flex flex-wrap items-start gap-6">
              <div className="relative w-56 -rotate-3 bg-blush p-5 shadow-card">
                <span className="absolute -top-3 left-6 h-6 w-20 -rotate-3 bg-paper/80 shadow-card" />
                <h2 className="ink-underline inline-block font-hand text-base tracking-[0.15em] text-ink">
                  NOTE TO SELF
                </h2>
                <p className="mt-3 font-hand text-sm leading-7 text-ink/85">
                  Be curious.
                  <br />
                  Keep practicing.
                  <br />
                  Build. Break. Learn. Repeat.
                </p>
              </div>

              <div className="relative w-52 rotate-2 bg-sage p-5 shadow-card">
                <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 bg-paper/80 shadow-card" />
                <p className="font-hand text-base leading-8 text-ink">
                  Skills aren&rsquo;t just learned, they are earned.
                </p>
                <Leaf className="mt-1 ml-auto block size-5 text-ink/40" strokeWidth={1.3} />
              </div>
            </div>
            {/* Hand-drawn shelf of books */}
            <svg
              aria-hidden
              viewBox="0 0 260 60"
              className="mt-10 w-full max-w-sm text-ink/45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <line x1="4" y1="56" x2="256" y2="56" />
              {[10, 22, 34, 46, 58, 70].map((x, i) => (
                <rect key={x} x={x} y={56 - (26 + (i % 3) * 6)} width="9" height={26 + (i % 3) * 6} rx="1.5" />
              ))}
              <rect x="92" y="40" width="40" height="8" rx="1.5" />
              <rect x="96" y="32" width="40" height="8" rx="1.5" />
              <rect x="92" y="24" width="40" height="8" rx="1.5" />
              {[146, 158, 170, 182, 194].map((x, i) => (
                <rect key={x} x={x} y={56 - (24 + (i % 2) * 8)} width="9" height={24 + (i % 2) * 8} rx="1.5" />
              ))}
              <path d="M214 56v-12" />
              <path d="M208 44h14l-2 12h-10z" />
              <path d="M215 44c-6-4-8-10-2-13 4 4 4 9 2 13z" />
              <path d="M215 46c5-5 11-4 12 1-5 2-9 1-12-1z" />
            </svg>
          </section>


          {/* Right page — tool cards */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-block -rotate-1 bg-blush px-6 py-1.5 font-display text-2xl tracking-wide text-ink shadow-card">
                MY TOOLS
              </h2>
              <p className="mt-3 font-hand text-base leading-7 text-ink/85">
                The tools I use to turn ideas into reality.
              </p>
              <span className="mx-auto mt-2 block h-px w-16 bg-ink/25" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tools.map(({ name, Icon, tone, tilt, desc }) => (
                <article
                  key={name}
                  className={`sticky-card relative ${tone} ${tilt} p-4 text-center shadow-card`}
                >
                  <span className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-1 bg-paper/70 shadow-card" />
                  <h3 className="font-display text-xl tracking-wide text-ink">{name}</h3>
                  <Icon className="mx-auto mt-2 size-7 text-ink/70" strokeWidth={1.3} />
                  <p className="mt-2 text-left font-hand text-sm leading-6 text-ink/80">{desc}</p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-right font-hand text-sm leading-6 text-ink/60">
              One skill at a time,
              <br />
              endless possibilities. <Lightbulb className="inline size-4" />
            </p>

            <article className="relative mt-4 rotate-[0.6deg] bg-paper-shade p-5 shadow-card">
              <span className="absolute -top-3 right-10 h-5 w-16 rotate-3 bg-paper/80 shadow-card" />
              <h3 className="ink-underline mx-auto block w-fit font-display text-xl tracking-wide text-ink">
                CURRENTLY EXPLORING
              </h3>
              <div className="mt-4 flex items-start gap-4">
                <Github className="size-10 shrink-0 text-ink/80" strokeWidth={1.2} />
                <div>
                  <h4 className="font-hand text-lg text-ink">GitHub</h4>
                  <p className="mt-1 font-hand text-sm leading-6 text-ink/80">
                    Getting familiar with version control and collaborative development.
                  </p>
                </div>
              </div>
            </article>

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
