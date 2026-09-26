import { useState, type FormEvent } from "react";
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
  Paperclip,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  RotateCcw,
  Pencil,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import deskBg from "@/assets/desk-bg.jpg";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Bhakti Rode | Bhakti's World" },
      {
        name: "description",
        content:
          "Say hello to Bhakti Rode — email, LinkedIn, GitHub and Instagram, plus a little note form to start a conversation.",
      },
      { property: "og:title", content: "Connect — Bhakti Rode" },
      {
        property: "og:description",
        content: "Let's build something amazing together — leave a note or find me online.",
      },
      { property: "og:url", content: "/connect" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/connect" }],
  }),
  component: ConnectPage,
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

const links = [
  {
    Icon: Mail,
    label: "Email",
    value: "bhakti.a.rode99@gmail.com",
    href: "mailto:bhakti.a.rode99@gmail.com",
    tone: "bg-sage",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/Bhakti Rode",
    href: "https://www.linkedin.com/in/bhakti-rode-5754aa31a",
    tone: "bg-lilac",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/BhaktiRode",
    href: "https://github.com/BhaktiRode",
    tone: "bg-butter",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@bloom_palette_9",
    href: "https://www.instagram.com/bloom_palette_9/",
    tone: "bg-blush",
  },
];

function ConnectPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bhakti.a.rode99@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      setSent(true);
      form.reset();
      toast.success("Message sent! Thank you for reaching out. ♥");
    } catch {
      toast.error("Sorry, your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

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
                07
              </span>
              <h1 className="font-display text-5xl tracking-wide text-ink md:text-6xl">CONNECT</h1>
              <Star className="size-6 text-ink/50" strokeWidth={1.3} />
              <Send className="ml-auto size-6 -rotate-12 text-ink/45" strokeWidth={1.3} />
            </div>
            <p className="mt-3 max-w-sm font-hand text-base leading-7 text-accent-foreground/80">
              Every good journey has a few more pages to write.{" "}
              <Heart className="inline size-4 text-accent" />
            </p>

            <article className="relative mt-7 ml-4 -rotate-1 bg-paper-shade px-6 py-5 shadow-card">
              <Paperclip className="absolute -top-4 left-4 size-7 -rotate-12 text-ink/45" strokeWidth={1.3} />
              <p className="font-hand text-base leading-8 text-ink/85">
                I&apos;m always open to learning, creating, collaborating, and connecting with people
                who enjoy building interesting things.
              </p>
              <Heart className="mt-2 size-4 text-ink/40" />
            </article>

            <ul className="mt-6 space-y-4">
              {links.map(({ Icon, label, value, href, tone }, i) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`sticky-card flex items-center gap-4 ${tone} px-5 py-3 shadow-card transition-transform hover:-translate-y-0.5 ${
                      i % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper/80 shadow-card">
                      <Icon className="size-5 text-ink/80" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 font-hand text-lg text-ink">
                        {label} <Heart className="size-3.5 text-accent" />
                      </span>
                      <span className="ink-underline block truncate font-hand text-sm text-ink/75">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center justify-between gap-4">
              <Camera className="size-12 text-ink/40" strokeWidth={1.1} />
              <p className="rounded-[50%] border border-dashed border-ink/40 px-7 py-4 text-center font-hand text-sm leading-6 text-ink/85">
                Let&apos;s build something
                <br />
                amazing together!
              </p>
              <Sparkles className="size-5 text-ink/35" strokeWidth={1.3} />
            </div>
          </section>

          {/* Right page */}
          <section className="paper-page rounded-2xl p-8 md:p-10 md:overflow-y-auto">
            <div className="text-center">
              <h2 className="inline-block -rotate-1 bg-lilac px-8 py-1.5 font-hand text-lg tracking-[0.22em] text-ink shadow-card">
                LEAVE A NOTE <Heart className="inline size-4" />
              </h2>
            </div>

            <div className="relative mt-6">
              <div className="mx-auto w-[92%] -rotate-1 border border-ink/25 bg-paper-shade px-6 pt-8 pb-14 shadow-card">
                <p className="text-center font-display text-4xl text-ink">
                  Say Hello <span className="align-middle text-2xl">👋</span>
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative -mt-10 rounded-md border border-ink/20 bg-paper p-6 shadow-card"
              >
                <input type="hidden" name="_subject" value="New Portfolio Message — Bhakti's World" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                <span className="absolute -top-3 left-10 h-6 w-24 -rotate-3 bg-peach/80 shadow-card" />

                <label className="flex items-center gap-3">
                  <User className="size-5 shrink-0 text-ink/60" strokeWidth={1.4} />
                  <input
                    required
                    name="name"
                    placeholder="Your Name"
                    className="w-full border-b border-dashed border-ink/40 bg-transparent py-2 font-hand text-base text-ink placeholder:text-ink/45 focus:border-ink/70 focus:outline-none"
                  />
                </label>

                <label className="mt-5 flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-ink/60" strokeWidth={1.4} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border-b border-dashed border-ink/40 bg-transparent py-2 font-hand text-base text-ink placeholder:text-ink/45 focus:border-ink/70 focus:outline-none"
                  />
                </label>

                <label className="mt-5 flex items-start gap-3">
                  <Pencil className="mt-2 size-5 shrink-0 text-ink/60" strokeWidth={1.4} />
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full resize-none rounded-md border border-dashed border-ink/40 bg-transparent p-3 font-hand text-base text-ink placeholder:text-ink/45 focus:border-ink/70 focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 flex w-full items-center justify-center gap-3 bg-lilac px-6 py-3 font-hand text-lg tracking-[0.12em] text-ink shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <ArrowRight className="size-5" />
                </button>

                {sent ? (
                  <p className="mt-3 text-center font-hand text-sm text-accent-foreground/85">
                    Note received — thank you! <Heart className="inline size-3.5 text-accent" />
                  </p>
                ) : null}
              </form>
            </div>

            <article className="relative mt-8 -rotate-[0.6deg] bg-paper-shade px-6 py-5 shadow-card">
              <span className="absolute -top-3 left-6 h-6 w-20 -rotate-6 bg-peach/80 shadow-card" />
              <p className="font-hand text-base leading-8 text-ink/85">
                Thank you for exploring my little corner of the internet.{" "}
                <Heart className="inline size-4 text-accent" />
              </p>
            </article>

            <Link
              to="/"
              className="mt-7 flex items-center justify-center gap-3 rounded-md border border-dashed border-ink/45 px-6 py-3 font-hand text-lg text-ink transition-transform hover:-translate-y-0.5"
            >
              Back to Beginning <RotateCcw className="size-5" />
            </Link>
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
