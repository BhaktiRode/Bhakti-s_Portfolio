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
  Star,
  Lightbulb,
  Pencil,
  Music,
  Puzzle,
  BookOpen,
  Coffee,
  Target,
  Users,
  TrendingUp,
  Paperclip,
  Sun,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";
import sunset from "@/assets/sunset.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhakti Rode | Bhakti's World" },
      {
        name: "description",
        content:
          "Get to know the person behind this portfolio — Bhakti Rode: a curious learner, creative thinker and aspiring developer.",
      },
      { property: "og:title", content: "About — Bhakti Rode" },
      {
        property: "og:description",
        content: "My story, what drives me, things I love and a few fun facts.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
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

const littleAbout = [
  { Icon: Star, text: "I enjoy blending creativity with logic." },
  { Icon: Lightbulb, text: "I love exploring new technologies and tools." },
  { Icon: Heart, text: "I believe in consistency, curiosity and continuous growth." },
  { Icon: Sparkles, text: "I'm always excited to learn, build and make things better." },
];

const thingsILove = [
  { Icon: Pencil, text: "Sketching" },
  { Icon: Camera, text: "Photography" },
  { Icon: Music, text: "Listening to music" },
  { Icon: Puzzle, text: "Solving problems" },
  { Icon: BookOpen, text: "Learning new things" },
  { Icon: Coffee, text: "Quiet moments & good coffee" },
];

const drives = [
  { Icon: Target, text: "The joy of solving real problems and creating useful solutions." },
  { Icon: Users, text: "Making an impact through technology and creativity." },
  { Icon: TrendingUp, text: "Growing every single day and becoming someone I admire." },
];

const funFacts = [
  "I overthink designs before coding.",
  "I can spend hours organizing things!",
  "I talk to myself while solving bugs.",
  "I love sunsets",
];

function AboutPage() {
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
          <Link to="/about" className="ink-underline flex items-center gap-2 text-ink">
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
            <h1 className="inline-block rounded-full border border-dashed border-ink/40 bg-lilac/70 px-8 py-1 font-display text-5xl tracking-wide text-ink shadow-card md:text-6xl">
              ABOUT
            </h1>
            <p className="mt-4 font-hand text-base text-ink/75">
              Get to know the person behind this portfolio.{" "}
              <Heart className="inline size-4 text-accent" />
            </p>

            <div className="mt-6 flex flex-wrap items-start gap-6">
              <figure className="relative w-52 -rotate-2 bg-paper p-3 pb-8 shadow-card">
                <span className="absolute -top-3 left-6 h-6 w-20 -rotate-6 bg-paper-shade/90 shadow-card" />
                <img
                  src={sunset}
                  alt="Warm pastel sunset over the ocean"
                  width={768}
                  height={960}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
              </figure>

              <article className="relative w-64 rotate-1 bg-paper-shade p-5 shadow-card">
                <span className="absolute -top-3 right-6 h-6 w-16 rotate-3 bg-lilac/70 shadow-card" />
                <h2 className="font-hand text-xl text-ink">
                  Hi, I&apos;m{" "}
                  <span className="ink-underline text-accent-foreground">Bhakti Rode</span>{" "}
                  <Heart className="inline size-4 text-accent" />
                </h2>
                <p className="mt-3 font-hand text-sm leading-7 text-ink/85">
                  I&apos;m a curious learner, creative thinker, and aspiring developer who loves
                  turning ideas into meaningful experiences.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap items-start gap-6">
              <div className="max-w-xs flex-1">
                <h3 className="inline-block -rotate-1 bg-lilac px-4 py-1 font-hand text-base tracking-[0.12em] text-ink shadow-card">
                  A LITTLE ABOUT ME
                </h3>
                <ul className="mt-4 space-y-3 font-hand text-sm leading-7 text-ink/85">
                  {littleAbout.map(({ Icon, text }) => (
                    <li key={text} className="flex gap-3">
                      <Icon className="mt-1 size-4 shrink-0 text-ink/60" strokeWidth={1.4} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <article className="relative w-56 rotate-[1.5deg] bg-lilac p-5 shadow-card">
                <span className="absolute -top-3 left-8 h-6 w-20 -rotate-3 bg-paper/80 shadow-card" />
                <h3 className="ink-underline inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                  THINGS I LOVE <Heart className="size-4" />
                </h3>
                <ul className="mt-3 space-y-2 font-hand text-sm leading-6 text-ink/85">
                  {thingsILove.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-2">
                      <Icon className="mt-0.5 size-4 shrink-0 text-ink/60" strokeWidth={1.4} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <blockquote className="relative mt-8 -rotate-1 bg-paper-shade px-6 py-4 font-hand text-base leading-8 text-ink/85 shadow-card">
              Every day is a chance to learn something new and become a better version of myself.{" "}
              <Heart className="inline size-4 text-accent" />
            </blockquote>
          </section>

          {/* Right page */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-block -rotate-1 bg-lilac px-6 py-1.5 font-display text-2xl tracking-wide text-ink shadow-card">
                MY STORY
              </h2>
            </div>

            <p className="mt-5 font-hand text-base leading-8 text-ink/85">
              My journey into the world of technology started with{" "}
              <span className="ink-underline">curiosity</span> and a desire to understand how things
              work behind the screen.
            </p>
            <p className="mt-4 font-hand text-base leading-8 text-ink/85">
              From learning the basics to building projects, every step has been{" "}
              <span className="ink-underline">exciting</span> and{" "}
              <span className="ink-underline">challenging</span> in the best way possible.
            </p>

            <blockquote className="relative mt-6 rotate-[0.6deg] bg-butter px-5 py-4 font-hand text-base leading-8 text-ink/85 shadow-card">
              I&apos;m not where I want to be yet, but I&apos;m proud of how far I&apos;ve come.{" "}
              <Heart className="inline size-4 text-accent" />
            </blockquote>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <article className="relative -rotate-[0.5deg] bg-paper-shade p-5 shadow-card">
                <h3 className="ink-underline inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                  WHAT DRIVES ME <Sparkles className="size-4" />
                </h3>
                <ul className="mt-4 space-y-4 font-hand text-sm leading-6 text-ink/85">
                  {drives.map(({ Icon, text }) => (
                    <li key={text} className="flex gap-3">
                      <Icon className="mt-0.5 size-6 shrink-0 text-ink/60" strokeWidth={1.3} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative rotate-[0.5deg] rounded-md border border-ink/30 bg-paper p-5 shadow-card">
                <h3 className="inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                  FUN FACTS <Heart className="size-4 text-accent" />
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-4 font-hand text-sm leading-6 text-ink/85">
                  {funFacts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Sun className="mt-2 ml-auto block size-5 text-ink/40" strokeWidth={1.3} />
              </article>
            </div>

            <article className="relative mt-6 -rotate-[0.4deg] border-l-4 border-dashed border-ink/25 bg-paper-shade p-5 shadow-card">
              <Paperclip className="absolute -top-4 left-6 size-7 -rotate-12 text-ink/45" strokeWidth={1.3} />
              <h3 className="ink-underline inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                IN A NUTSHELL <Heart className="size-4" />
              </h3>
              <p className="mt-3 font-hand text-base leading-8 text-ink/85">
                I&apos;m someone who shows up with curiosity, learns with passion, and builds with
                purpose.
              </p>
              <p className="mt-3 font-hand text-base leading-8 text-accent-foreground/80">
                Let&apos;s keep learning and building together!
              </p>
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
