export type BookPage = {
  path: string;
  label: string;
};

/** Reading order of the sketchbook. Index + 1 is the printed page number. */
export const bookPages: BookPage[] = [
  { path: "/", label: "Cover" },
  { path: "/about", label: "About" },
  { path: "/journey", label: "My Journey" },
  { path: "/skills", label: "My Toolkit" },
  { path: "/projects", label: "Project" },
  { path: "/learning", label: "Learning Lab" },
  { path: "/beyond", label: "Beyond Code" },
  { path: "/future", label: "Future Horizon" },

  { path: "/connect", label: "Connect" },
];

export function pageIndexOf(pathname: string): number {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return bookPages.findIndex((p) => p.path === clean);
}
