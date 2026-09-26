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
  Brain,
  Rocket,
  TrendingUp,
  MonitorSmartphone,
  Paperclip,
  Cloud,
  Sun,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";

export const Route = createFileRoute("/future")({
  head: () => ({
    meta: [
      { title: "Future Horizon — Bhakti Rode | Still Becoming" },
      {
        name: "description",
        content:
          "Where Bhakti is headed next — growing as a developer, exploring data and visualization, learning continuously and building meaningful projects.",
      },
      { property: "og:title", content: "Future Horizon — Bhakti Rode" },
      {
        property: "og:description",
        content: "The road ahead: learn, build, explore, create, grow. Dreams and notes to self.",
      },
      { property: "og:url", content: "/future" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/future" }],
  }),
  component: FuturePage,
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

const headed = [
  {
    Icon: MonitorSmartphone,
    title: "Grow as a Developer",
    body: "Strengthen my skills and build clean, efficient and impactful applications.",
    tone: "bg-paper-shade",
    tilt: "-rotate-1",
  },
  {
    Icon: TrendingUp,
    title: "Explore Data & Visualization",
    body: "Work with data, discover insights and present them in meaningful and beautiful ways.",
    tone: "bg-sage",
    tilt: "rotate-1",
  },
  {
    Icon: Brain,
    title: "Keep Learning",
    body: "Stay curious, keep practicing and never stop improving one step at a time.",
    tone: "bg-butter",
    tilt: "-rotate-1",
  },
  {
    Icon: Rocket,
    title: "Build Meaningful Projects",
    body: "Create projects that solve real problems and make a difference to real people.",
    tone: "bg-sky",
    tilt: "rotate-1",
  },
];

const road = [
  { n: "1", label: "LEARN", tone: "bg-lilac", note: "Understand the basics." },
  { n: "2", label: "BUILD", tone: "bg-sage", note: "Apply ideas." },
  { n: "3", label: "EXPLORE", tone: "bg-butter", note: "Try new things. Step out." },
  { n: "4", label: "CREATE", tone: "bg-blush", note: "Design. Code. Bring ideas to life." },
  { n: "5", label: "GROW", tone: "bg-sky", note: "Evolve. Improve. Become better everyday." },
];

const dreams = [
  "Build things I'm proud of.",
  "Become more confident with technology.",
  "Keep exploring new ideas.",
];

function FuturePage() {
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
              <span className="flex size-14 items-center justify-center rounded-full bg-lilac font-display text-2xl text-ink shadow-card">
                06
              </span>
              <h1 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                FUTURE HORIZON
              </h1>
              <Sparkles className="size-5 text-ink/45" strokeWidth={1.3} />
            </div>
            <p className="mt-2 font-hand text-base text-accent-foreground/80">
              Still becoming. <Heart className="inline size-4 text-accent" />
            </p>

            <h2 className="mt-5 inline-block -rotate-1 bg-lilac px-6 py-1 font-hand text-base tracking-[0.16em] text-ink shadow-card">
              WHERE I&apos;M HEADED
            </h2>

            <div className="mt-5 space-y-4">
              {headed.map(({ Icon, title, body, tone, tilt }) => (
                <article
                  key={title}
                  className={`sticky-card relative flex items-start gap-4 ${tone} ${tilt} p-4`}
                >
                  <Icon className="mt-1 size-9 shrink-0 text-ink/55" strokeWidth={1.2} />
                  <div>
                    <h3 className="font-hand text-xl text-ink underline decoration-ink/25 underline-offset-4">
                      {title}
                    </h3>
                    <p className="mt-1 font-hand text-base leading-7 text-ink/80">{body}</p>
                  </div>
                </article>
              ))}
            </div>

            <Star className="absolute bottom-6 right-5 size-5 text-ink/25" strokeWidth={1.3} />
          </section>

          {/* Right page */}
          <section className="paper-page relative rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="flex items-center gap-3">
              <h2 className="inline-block rotate-[-0.8deg] bg-lilac px-6 py-1 font-hand text-base tracking-[0.16em] text-ink shadow-card">
                THE ROAD AHEAD
              </h2>
              <Cloud className="ml-auto size-6 text-ink/30" strokeWidth={1.2} />
              <Sun className="size-6 text-ink/30" strokeWidth={1.2} />
            </div>

            <p className="mt-3 font-hand text-base leading-7 text-ink/80">
              A journey of a thousand lines starts with a single step.{" "}
              <Heart className="inline size-4 text-accent" />
            </p>

            <div className="mt-5 space-y-3 border-l-2 border-dashed border-ink/25 pl-5">
              {[...road].reverse().map(({ n, label, tone, note }) => (
                <div key={n} className="flex flex-wrap items-center gap-3">
                  <span
                    className={`sticky-card flex items-center gap-2 ${tone} px-4 py-1.5 font-hand text-base tracking-wide text-ink`}
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-paper/80 text-[11px]">
                      {n}
                    </span>
                    {label}
                  </span>
                  <span className="font-hand text-sm leading-6 text-ink/70">— {note}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="sticky-card relative rotate-1 bg-paper-shade p-4">
                <h3 className="inline-block bg-sage px-4 py-0.5 font-hand text-sm tracking-[0.16em] text-ink">
                  DREAMS
                </h3>
                <ul className="mt-3 space-y-2 font-hand text-base leading-7 text-ink/85">
                  {dreams.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Heart className="mt-1.5 size-3.5 shrink-0 text-accent" strokeWidth={1.6} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative rotate-[-0.6deg] border-l-4 border-dashed border-ink/25 bg-paper p-5 shadow-card">
                <Paperclip className="absolute -top-4 left-5 size-7 -rotate-12 text-ink/45" strokeWidth={1.3} />
                <h3 className="font-display text-2xl tracking-wide text-ink">
                  NOTE TO SELF <Heart className="inline size-4 text-accent" />
                </h3>
                <p className="mt-2 font-hand text-base leading-8 text-ink/85">
                  There is always something new to learn.
                </p>
              </article>
            </div>

            <Mountain className="absolute bottom-5 right-6 size-7 text-ink/20" strokeWidth={1.2} />
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
