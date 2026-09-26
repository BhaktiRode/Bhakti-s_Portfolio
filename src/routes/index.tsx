import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  User,
  Send,
  Mail,
  Signpost,
  Code2,
  Laptop,
  FlaskConical,
  Camera,
  Mountain,
  Cake,
  Coffee,
  Sprout,
  Star,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";
import portrait from "@/assets/portrait-bhakti.png";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhakti's World — Student, Developer & Explorer Portfolio" },
      {
        name: "description",
        content:
          "A scrapbook portfolio by Bhakti: journey, skills, projects, learning lab, creative side and ways to connect.",
      },
      { property: "og:title", content: "Bhakti's World — Explore. Learn. Create." },
      {
        property: "og:description",
        content:
          "An illustrated notebook portfolio of projects, skills, experiments and creative work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pages = [
  {
    n: "01",
    id: "journey",
    title: "MY JOURNEY",
    note: "My path so far",
    Icon: Signpost,
    tone: "bg-sage",
    dot: "bg-sage",
  },
  {
    n: "02",
    id: "skills",
    title: "SKILL CITY",
    note: "Things I know",
    Icon: Code2,
    tone: "bg-lilac",
    dot: "bg-lilac",
  },
  {
    n: "03",
    id: "projects",
    title: "PROJECT",
    note: "What I build",
    Icon: Laptop,
    tone: "bg-butter",
    dot: "bg-butter",
  },
  {
    n: "04",
    id: "learning",
    title: "LEARNING LAB",
    note: "What I'm exploring",
    Icon: FlaskConical,
    tone: "bg-blush",
    dot: "bg-blush",
  },
  {
    n: "05",
    id: "beyond",
    title: "BEYOND CODE",
    note: "My creative side",
    Icon: Camera,
    tone: "bg-peach",
    dot: "bg-peach",
  },
  {
    n: "06",
    id: "future",
    title: "FUTURE HORIZON",
    note: "Dreams & goals",
    Icon: Mountain,
    tone: "bg-sky",
    dot: "bg-sky",
  },
];

const traits = [
  { label: "Curious", Icon: Cake },
  { label: "Creative", Icon: Coffee },
  { label: "Consistent", Icon: Sprout },
  { label: "Dreamer", Icon: Star },
];

const tabs = [
  ...pages.map(({ n, id, title, Icon, tone }) => ({
    n,
    id,
    label: title,
    Icon,
    tone,
  })),
  { n: "07", id: "connect", label: "CONNECT", Icon: Mail, tone: "bg-sage" },
];


function Index() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 py-6 md:px-10"
      style={{ backgroundImage: `url(${deskBg})` }}
    >
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl leading-none text-ink md:text-5xl">
            Bhakti&apos;s World
          </h1>
          <p className="font-hand text-xs tracking-[0.28em] text-muted-foreground">
            EXPLORE • LEARN • CREATE <span className="text-accent">♡</span>
          </p>
        </div>

        <nav className="flex items-center gap-7 font-hand text-lg">
          <a href="#world" className="ink-underline flex items-center gap-2 text-ink">
            <Home className="size-5" /> Home
          </a>
          <Link
            to="/about"
            className="flex items-center gap-2 text-ink/75 transition-colors hover:text-ink"
          >
            <User className="size-5" /> About
          </Link>
        </nav>

        <a
          href="#connect"
          className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-hand text-lg text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s Connect <Send className="size-4" />
        </a>
      </header>

      <div className="relative mx-auto mt-8 flex max-w-7xl gap-2">
        <div data-book-shell className="relative grid flex-1 gap-2 rounded-3xl bg-sand/70 p-3 shadow-paper md:grid-cols-2 md:p-4 md:h-[980px]">
          {/* Left page */}
          <section id="about" className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <p className="font-hand text-2xl text-ink">Hi, I&apos;m</p>
            <h2 className="font-display text-7xl leading-[0.9] text-ink md:text-8xl">Bhakti!</h2>

            <p className="mt-5 inline-block rounded-full bg-blush/60 px-5 py-2 font-hand text-base text-ink">
              Student • Developer • Explorer
            </p>

            <p className="mt-6 max-w-md font-hand text-lg leading-8 text-ink/85">
              I love turning ideas into real world projects, exploring data, building web
              applications and capturing moments through my lens.
            </p>

            <figure className="mt-8 w-64 -rotate-2 bg-paper p-3 shadow-card">
              <img
                src={portrait}
                alt="Portrait of Bhakti with long wavy hair in a white shirt"
                width={1248}
                height={1248}
                className="h-64 w-full object-cover object-top"
              />
            </figure>

            <h3 className="ink-underline mt-10 inline-block font-hand text-xl text-ink">
              A little about me
            </h3>
            <ul className="mt-5 flex flex-wrap gap-8">
              {traits.map(({ label, Icon }) => (
                <li key={label} className="flex flex-col items-center gap-2">
                  <Icon className="size-7 text-ink/70" strokeWidth={1.4} />
                  <span className="font-hand text-sm text-ink/80">{label}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 w-fit -rotate-1 bg-paper-shade px-6 py-4 font-hand text-base text-ink/85 shadow-card">
              &ldquo;Code is what I write, creativity is what I live. <span>♡</span>&rdquo;
            </blockquote>
          </section>

          {/* Right page */}
          <section id="world" className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <h2 className="ink-underline mx-auto block w-fit font-hand text-3xl tracking-[0.15em] text-ink">
              MY WORLD
            </h2>
            <p className="mt-4 text-center font-hand text-base text-ink/70">
              Click on any page to explore ↔
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pages.map(({ n, id, title, note, Icon, tone, dot }) => {
                const cls = `sticky-card relative block scroll-mt-24 rounded-xl ${tone} p-5 text-left hover:-translate-y-1`;
                const inner = (
                  <>
                    <span
                      className={`absolute -top-3 -left-3 flex size-9 items-center justify-center rounded-full ${dot} font-hand text-sm text-ink shadow-card`}
                    >
                      {n}
                    </span>
                    <h3 className="text-center font-hand text-lg tracking-wide text-ink">{title}</h3>
                    <Icon className="mt-4 size-8 text-ink/75" strokeWidth={1.3} />
                    <p className="mt-3 text-right font-hand text-sm text-ink/70">{note}</p>
                  </>
                );
                return id === "journey" ? (
                  <Link key={n} id={id} to="/journey" className={cls}>
                    {inner}
                  </Link>
                ) : id === "skills" ? (
                  <Link key={n} id={id} to="/skills" className={cls}>
                    {inner}
                  </Link>
                ) : id === "projects" ? (
                  <Link key={n} id={id} to="/projects" className={cls}>
                    {inner}
                  </Link>
                ) : id === "future" ? (
                  <Link key={n} id={id} to="/future" className={cls}>
                    {inner}
                  </Link>
                ) : id === "learning" ? (
                  <Link key={n} id={id} to="/learning" className={cls}>
                    {inner}
                  </Link>
                ) : id === "beyond" ? (
                  <Link key={n} id={id} to="/beyond" className={cls}>
                    {inner}
                  </Link>

                ) : (
                  <a key={n} id={id} href={`#${id}`} className={cls}>
                    {inner}
                  </a>
                );
              })}

            </div>

            <a
              id="connect"
              href="#connect"
              className="sticky-card relative mx-auto mt-8 block w-full max-w-sm scroll-mt-24 rounded-xl bg-sage p-5 text-left hover:-translate-y-1"
            >
              <span className="absolute -top-3 -left-3 flex size-9 items-center justify-center rounded-full bg-sage font-hand text-sm text-ink shadow-card">
                07
              </span>
              <h3 className="text-center font-hand text-lg tracking-wide text-ink">CONNECT</h3>
              <div className="mt-4 flex items-center justify-between">
                <Mail className="size-8 text-ink/75" strokeWidth={1.3} />
                <p className="font-hand text-sm text-ink/70">Let&apos;s get in touch!</p>
              </div>
            </a>
          </section>
        </div>

        {/* Notebook tabs */}
        <nav
          aria-label="Notebook sections"
          className="hidden w-28 flex-col gap-2 pt-16 lg:flex"
        >
          {tabs.map(({ n, id, label, Icon, tone }) => {
            const cls = `sticky-card flex items-center gap-2 rounded-r-xl ${tone} py-2.5 pr-2 pl-3 font-hand text-[11px] leading-tight tracking-wide text-ink hover:translate-x-1`;
            const inner = (
              <>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-paper/80 text-[10px] text-ink/80">
                  {n}
                </span>
                <Icon className="size-4 shrink-0 text-ink/75" strokeWidth={1.4} />
                <span className="truncate">{label}</span>
              </>
            );
            return id === "journey" ? (
              <Link key={n} to="/journey" className={cls}>
                {inner}
              </Link>
            ) : id === "skills" ? (
              <Link key={n} to="/skills" className={cls}>
                {inner}
              </Link>
            ) : id === "projects" ? (
              <Link key={n} to="/projects" className={cls}>
                {inner}
              </Link>
            ) : id === "future" ? (
                  <Link key={n} to="/future" className={cls}>
                    {inner}
                  </Link>
            ) : id === "beyond" ? (
              <Link key={n} to="/beyond" className={cls}>
                {inner}
              </Link>
            ) : id === "learning" ? (
              <Link key={n} to="/learning" className={cls}>
                {inner}
              </Link>

            ) : id === "connect" ? (
              <Link key={n} to="/connect" className={cls}>
                {inner}
              </Link>
            ) : (
              <a key={n} href={`#${id}`} className={cls}>
                {inner}
              </a>
            );
          })}

        </nav>

      </div>
    </main>
  );
}
