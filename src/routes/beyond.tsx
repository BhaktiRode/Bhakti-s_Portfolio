import { useCallback, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
  Pencil,
  Heart,
  Star,
  Sparkles,
  Palette,
  ArrowRight,
} from "lucide-react";

import deskBg from "@/assets/desk-bg.jpg";
import sketchChef from "@/assets/sketch-chef.png";
import sketchGirl from "@/assets/sketch-girl.png";
import sketchPortrait from "@/assets/sketch-portrait.png";
import photoMusicians from "@/assets/photo-musicians.jpeg";
import photoTrishul from "@/assets/photo-trishul.jpeg";
import photoFeather from "@/assets/photo-feather.png";

export const Route = createFileRoute("/beyond")({
  head: () => ({
    meta: [
      { title: "Beyond Code — Sketching & Photography | Bhakti Rode" },
      {
        name: "description",
        content:
          "Creativity is my second language — pencil sketches and photographs from Bhakti's notebook, where ideas take shape one frame at a time.",
      },
      { property: "og:title", content: "Beyond Code — Bhakti Rode" },
      {
        property: "og:description",
        content: "Sketching and photography: where ideas take shape and memories are captured.",
      },
      { property: "og:url", content: "/beyond" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/beyond" }],
  }),
  component: BeyondPage,
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

type Piece = {
  src: string;
  alt: string;
  w: number;
  h: number;
  className: string;
  frame: "sketch" | "polaroid";
  delay: number;
};

const sketches: Piece[] = [
  {
    src: sketchChef,
    alt: "Illustration of a smiling dosa chef tossing a dosa, with a 'Good dosa good mood' chalkboard",
    w: 1070,
    h: 1449,
    className: "w-40 -rotate-3 md:w-48",
    frame: "sketch",
    delay: 0,
  },
  {
    src: sketchGirl,
    alt: "Pencil sketch of a girl in a saree resting by a sunlit window",
    w: 1098,
    h: 1462,
    className: "w-40 rotate-2 md:w-48",
    frame: "sketch",
    delay: 90,
  },
  {
    src: sketchPortrait,
    alt: "Charcoal sketch portrait of Chhatrapati Shivaji Maharaj",
    w: 1070,
    h: 1449,
    className: "w-40 rotate-1 md:w-48",
    frame: "sketch",
    delay: 180,
  },
];

const photos: Piece[] = [
  {
    src: photoMusicians,
    alt: "Photograph of two folk musicians playing in the Himalayan mountains",
    w: 1125,
    h: 1441,
    className: "w-40 -rotate-2 md:w-48",
    frame: "polaroid",
    delay: 60,
  },
  {
    src: photoTrishul,
    alt: "Photograph of a large trishul on the misty Kedarnath path",
    w: 1152,
    h: 1536,
    className: "w-36 rotate-2 md:w-44",
    frame: "polaroid",
    delay: 150,
  },
  {
    src: photoFeather,
    alt: "Photograph of a peacock feather on an old book beside bangles and brass pots",
    w: 1443,
    h: 1085,
    className: "w-44 rotate-1 md:w-52",
    frame: "polaroid",
    delay: 240,
  },
];

function Card({ piece, flying }: { piece: Piece; flying: boolean }) {
  const isPolaroid = piece.frame === "polaroid";
  return (
    <figure
      className={`fly-card relative ${piece.className} ${
        isPolaroid ? "bg-paper p-2 pb-8" : "bg-paper p-2"
      } shadow-card ${flying ? "is-flying" : ""}`}
      style={flying ? ({ animationDelay: `${piece.delay}ms` } as React.CSSProperties) : undefined}
    >
      <span className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-sand/80 shadow-card" />
      <img
        src={piece.src}
        alt={piece.alt}
        width={piece.w}
        height={piece.h}
        loading="lazy"
        className="block h-auto w-full object-cover"
      />
    </figure>
  );
}

function BeyondPage() {
  const navigate = useNavigate();
  const [flying, setFlying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    if (flying) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFlying(true);
    timer.current = setTimeout(
      () => {
        void navigate({ to: "/future" });
      },
      reduced ? 320 : 1150,
    );
  }, [flying, navigate]);

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
          <Link to="/about" className="flex items-center gap-2 text-ink/75 transition-colors hover:text-ink">
            <User className="size-5" /> About
          </Link>
        </nav>

        <Link
          to="/connect"
          className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-hand text-lg text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
        >
          Let's Connect <Send className="size-4" />
        </Link>
      </header>

      <div className="relative mx-auto mt-8 flex max-w-7xl gap-2">
        <div data-book-shell className="relative grid flex-1 gap-2 rounded-3xl bg-sand/70 p-3 shadow-paper md:grid-cols-2 md:p-4 md:h-[980px]">
          {/* Left page — Sketching */}
          <section className="paper-page relative rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-blush font-hand text-xl text-ink shadow-card">
                05
              </span>
              <h1 className="ink-underline font-display text-4xl tracking-wide text-ink md:text-5xl">
                BEYOND CODE
              </h1>
              <Star className="size-6 text-ink/45" strokeWidth={1.3} />
            </div>

            <p className="mt-3 font-hand text-base text-accent">
              Creativity is my second language. <Heart className="inline size-4" />
            </p>

            <h2 className="mt-6 inline-flex -rotate-1 items-center gap-2 bg-sand px-4 py-1.5 font-display text-xl tracking-wide text-ink shadow-card">
              <Pencil className="size-5" strokeWidth={1.4} /> Sketching
            </h2>
            <p className="mt-3 font-hand text-base text-ink/85">
              Where ideas take shape. <Heart className="inline size-4 text-ink/40" />
            </p>

            <div className="mt-6 flex flex-wrap items-start gap-5">
              {sketches.map((piece) => (
                <Card key={piece.src} piece={piece} flying={flying} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div className="relative w-64 -rotate-1 bg-sage p-4 font-hand text-sm leading-7 text-ink shadow-card">
                <span className="absolute -top-3 left-6 h-5 w-16 -rotate-3 bg-paper/80 shadow-card" />
                Sketching helps me see the world in different lines.
                <Heart className="mt-1 ml-auto block size-4 text-ink/40" strokeWidth={1.3} />
              </div>
              <Palette className="size-10 text-ink/35" strokeWidth={1.2} />
            </div>
          </section>

          {/* Right page — Photography */}
          <section className="paper-page relative rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-flex rotate-1 items-center gap-2 bg-sand px-5 py-1.5 font-display text-xl tracking-wide text-ink shadow-card">
                <Camera className="size-5" strokeWidth={1.4} /> Photography
              </h2>
              <p className="mt-3 font-hand text-base leading-7 text-ink/85">
                Capturing memories, one frame
                <br />
                at a time.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-start justify-center gap-5">
              {photos.map((piece) => (
                <Card key={piece.src} piece={piece} flying={flying} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div className="relative w-72 rotate-1 bg-paper-shade p-4 font-hand text-sm leading-7 text-ink shadow-card">
                <span className="absolute -top-3 right-8 h-5 w-16 rotate-3 bg-paper/80 shadow-card" />
                Photography teaches me to pause, look closer and appreciate the moment.
                <Sparkles className="mt-1 ml-auto block size-4 text-ink/40" strokeWidth={1.3} />
              </div>

              <button
                type="button"
                onClick={goNext}
                disabled={flying}
                aria-label="Next page — Future Horizon"
                className="flex items-center gap-3 rounded-xl border-2 border-dashed border-ink/45 bg-sand px-6 py-3 font-display text-lg tracking-wide text-ink shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                NEXT PAGE <ArrowRight className="size-5" strokeWidth={1.6} />
              </button>
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
