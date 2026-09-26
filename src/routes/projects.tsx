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
  Users,
  Lightbulb,
  CheckCircle2,
  ClipboardList,
  Code2,
  CircleCheck,
  GraduationCap,
  Globe,
  Github,
  ShoppingBasket,
  ChefHat,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";
import recipeShot from "@/assets/recipe-rush.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project — Recipe Rush | Bhakti's World" },
      {
        name: "description",
        content:
          "Recipe Rush — an online recipe and ingredients ordering system built by Bhakti with PHP, MySQL, HTML, CSS and JavaScript.",
      },
      { property: "og:title", content: "Project — Recipe Rush | Bhakti's World" },
      {
        property: "og:description",
        content: "Ideas that made their way from thought to reality.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectPage,
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

const offers = [
  "Browse recipes by categories (Breakfast, Lunch, Dinner, Desserts)",
  "View ingredient details",
  "Add ingredients to cart",
  "Place orders easily",
  "User authentication (Login / Signup)",
  "Order history",
  "Feedback submission",
];

const tech = ["PHP", "MySQL", "HTML", "CSS", "JavaScript"];

const highlights = [
  "Category based browsing",
  "Cart management",
  "Secure checkout & order placement",
  "Admin panel for full management",
  "Responsive & user-friendly interface",
];

const learned = [
  "Full-stack web development",
  "Database design & management",
  "User authentication & session handling",
  "Building a real-world project from scratch",
  "Problem solving & logical thinking",
];

const flow = [
  {
    Icon: Lightbulb,
    title: "IDEA",
    desc: "A thought to make recipe & ingredient shopping easier.",
  },
  { Icon: Code2, title: "BUILD", desc: "Designed, coded and built with care." },
  {
    Icon: CircleCheck,
    title: "RESULT",
    desc: "Recipe Rush — ready to help users cook better, every day.",
  },
];

function ProjectPage() {
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
              <span className="flex size-11 items-center justify-center rounded-full bg-blush font-hand text-xl text-ink shadow-card">
                03
              </span>
              <h1 className="ink-underline font-display text-5xl tracking-wide text-ink md:text-6xl">
                PROJECT
              </h1>
              <Sparkles className="size-6 text-ink/50" strokeWidth={1.3} />
            </div>

            <p className="mt-5 max-w-md font-hand text-base leading-8 text-ink/85">
              Ideas that made their way
              <br />
              from thought to reality. <Heart className="inline size-4 text-accent" />
            </p>

            {/* Main project note */}
            <article className="relative mt-6 -rotate-[0.6deg] bg-paper-shade p-5 shadow-card">
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-1 bg-paper/80 shadow-card" />
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-4xl tracking-wide text-ink">RECIPE RUSH</h2>
                <ChefHat className="size-9 shrink-0 text-ink/60" strokeWidth={1.2} />
              </div>
              <p className="mt-2 font-hand text-lg leading-8 text-accent-foreground/70">
                Discover recipes. Get the ingredients. Start cooking. ♡
              </p>
              <p className="mt-3 font-hand text-base leading-7 text-ink/85">
                Recipe Rush is an Online Recipe and Ingredients Ordering System that helps users
                discover delicious recipes and order the ingredients they need — all in one place.
                Making cooking simple, organized and hassle-free.
              </p>
              <ShoppingBasket className="mt-2 size-7 text-ink/40" strokeWidth={1.2} />
            </article>

            <div className="mt-6 flex flex-wrap items-start gap-5">
              <div className="relative w-52 -rotate-2 bg-blush p-4 shadow-card">
                <span className="absolute -top-3 left-6 h-6 w-20 -rotate-3 bg-paper/80 shadow-card" />
                <h3 className="ink-underline inline-block font-hand text-base tracking-[0.12em] text-ink">
                  WHY I BUILT IT
                </h3>
                <p className="mt-2 font-hand text-sm leading-7 text-ink/85">
                  To simplify the cooking process by combining recipe discovery with easy ingredient
                  ordering. Because good food starts with the right ingredients!
                </p>
                <Heart className="mt-1 ml-auto block size-4 text-ink/40" strokeWidth={1.3} />
              </div>

              <div className="relative w-52 rotate-2 bg-sage p-4 shadow-card">
                <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 bg-paper/80 shadow-card" />
                <h3 className="ink-underline inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                  WHO IT&rsquo;S FOR <Users className="size-4" />
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-4 font-hand text-sm leading-7 text-ink/85">
                  <li>Home cooks</li>
                  <li>Working professionals</li>
                  <li>Anyone who loves cooking but wants convenience</li>
                </ul>
              </div>
            </div>

            {/* Idea -> Build -> Result */}
            <div className="mt-6 rounded-xl border border-dashed border-ink/30 p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {flow.map(({ Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className={`text-center ${i > 0 ? "sm:border-l sm:border-dashed sm:border-ink/25 sm:pl-3" : ""}`}
                  >
                    <h4 className="ink-underline inline-block font-display text-xl tracking-wide text-ink">
                      {title}
                    </h4>
                    <Icon className="mx-auto mt-2 size-7 text-ink/65" strokeWidth={1.3} />
                    <p className="mt-2 font-hand text-sm leading-6 text-ink/80">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right page */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-block -rotate-1 bg-blush px-6 py-1.5 font-display text-2xl tracking-wide text-ink shadow-card">
                PROJECT SPOTLIGHT
              </h2>
            </div>

            <figure className="relative mt-5">
              <span className="absolute -top-3 left-8 h-6 w-20 -rotate-3 bg-paper/80 shadow-card" />
              <span className="absolute -top-3 right-8 h-6 w-20 rotate-3 bg-paper/80 shadow-card" />
              <img
                src={recipeShot}
                alt="Recipe Rush website homepage with hero banner and food categories"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-md border border-ink/15 shadow-card"
              />
            </figure>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="relative rotate-[0.5deg] bg-lilac p-4 shadow-card">
                <h3 className="ink-underline inline-block font-hand text-base tracking-[0.12em] text-ink">
                  WHAT IT OFFERS
                </h3>
                <ul className="mt-2 space-y-1.5 font-hand text-sm leading-6 text-ink/85">
                  {offers.map((o) => (
                    <li key={o} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-ink/55" strokeWidth={1.5} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="space-y-4">
                <article className="relative -rotate-[0.5deg] bg-butter p-4 shadow-card">
                  <h3 className="ink-underline inline-block font-hand text-base tracking-[0.12em] text-ink">
                    TECHNOLOGIES USED
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-paper/80 px-3 py-1 font-hand text-sm text-ink/85 shadow-card"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="relative rotate-[0.5deg] bg-paper-shade p-4 shadow-card">
                  <h3 className="ink-underline inline-block font-hand text-base tracking-[0.12em] text-ink">
                    KEY HIGHLIGHTS
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 font-hand text-sm leading-6 text-ink/85">
                    {highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="relative -rotate-[0.6deg] bg-sky p-4 shadow-card">
                <span className="absolute -top-3 left-8 h-5 w-16 -rotate-3 bg-paper/80 shadow-card" />
                <h3 className="ink-underline inline-flex items-center gap-2 font-hand text-base tracking-[0.12em] text-ink">
                  WHAT I LEARNED <GraduationCap className="size-4" />
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-4 font-hand text-sm leading-6 text-ink/85">
                  {learned.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </article>

              <div className="flex flex-col justify-center gap-3">
                <a
                  href="https://reciperush.rf.gd/welcome.html"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sticky-card flex items-center justify-center gap-3 rounded-md bg-sage px-5 py-3.5 font-display text-2xl tracking-wide text-ink hover:-translate-y-0.5"
                >
                  <Globe className="size-6" strokeWidth={1.4} /> VIEW LIVE PROJECT →
                </a>
                <a
                  href="https://github.com/BhaktiRode"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sticky-card flex items-center justify-center gap-3 rounded-md bg-blush px-5 py-3.5 font-display text-2xl tracking-wide text-ink hover:-translate-y-0.5"
                >
                  <Github className="size-6" strokeWidth={1.4} /> MY GITHUB →
                </a>
              </div>
            </div>

            <p className="mt-5 flex items-center justify-end gap-2 font-hand text-sm text-ink/60">
              <ClipboardList className="size-4" /> More projects coming soon.
            </p>
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
