import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { bookPages, pageIndexOf } from "@/lib/book-pages";
import { playPageTurnSound, primePageTurnSound } from "@/lib/page-turn-sound";

const TURN_MS = 1100;


/**
 * Wraps the app in a sketchbook: every move between two pages of the book
 * plays a 3D paper-turn, and a page number / prev-next control sits at the
 * bottom of every page. Existing page content is untouched.
 */
export function BookTurn({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [turn, setTurn] = useState<"forward" | "back" | null>(null);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const lastIndex = useRef(pageIndexOf(pathname));
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unlock = () => primePageTurnSound();
    window.addEventListener("pointerdown", unlock, { capture: true });
    window.addEventListener("keydown", unlock, { capture: true });
    return () => {
      window.removeEventListener("pointerdown", unlock, { capture: true });
      window.removeEventListener("keydown", unlock, { capture: true });
    };
  }, []);

  useEffect(() => {

    const index = pageIndexOf(pathname);
    const previous = lastIndex.current;
    lastIndex.current = index;
    if (index < 0 || previous < 0 || index === previous) return;

    window.scrollTo({ top: 0, behavior: "auto" });

    const measure = () => {
      const shell = document.querySelector("[data-book-shell]");
      if (!shell) return;
      const r = shell.getBoundingClientRect();
      if (r.width < 100 || r.top > window.innerHeight * 0.8) return;
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };
    measure();
    requestAnimationFrame(measure);

    setTurn(index > previous ? "forward" : "back");
    playPageTurnSound();
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setTurn(null), TURN_MS);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname]);

  const index = pageIndexOf(pathname);
  const prev = index > 0 ? bookPages[index - 1] : null;
  const next = index >= 0 && index < bookPages.length - 1 ? bookPages[index + 1] : null;

  return (
    <div className="book-stage relative min-h-screen">
      <div>{children}</div>

      {turn ? (
        <div
          className="book-turn-layer"
          aria-hidden="true"
          style={
            rect
              ? { inset: "auto", top: rect.top, left: rect.left, width: rect.width, height: rect.height }
              : undefined
          }


        >
          <div className={turn === "forward" ? "book-sheet book-sheet--forward" : "book-sheet book-sheet--back"}>
            <div className="book-sheet__face" />
            <div className="book-sheet__curl" />
            <div className="book-sheet__edge" />
          </div>
          <div className={turn === "forward" ? "book-gutter book-gutter--forward" : "book-gutter book-gutter--back"} />
        </div>
      ) : null}

      {index >= 0 ? (
        <nav
          aria-label="Sketchbook pages"
          className="pointer-events-none sticky bottom-0 z-30 mx-auto flex max-w-7xl items-end justify-between gap-4 px-4 pb-5 pt-8 md:px-10"
        >
          {prev ? (
            <Link
              to={prev.path}
              onMouseDown={() => router.preloadRoute({ to: prev.path })}
              className="page-flip-btn pointer-events-auto group"
            >
              <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">{prev.label}</span>
              <span className="sm:hidden">Back</span>
            </Link>
          ) : (
            <span />
          )}

          <span className="page-number pointer-events-none">
            <span className="page-number__rule" />
            {index + 1} <span className="opacity-55">/ {bookPages.length}</span>
          </span>

          {next ? (
            <Link
              to={next.path}
              onMouseDown={() => router.preloadRoute({ to: next.path })}
              className="page-flip-btn pointer-events-auto group"
            >
              <span className="hidden sm:inline">{next.label}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </div>
  );
}
