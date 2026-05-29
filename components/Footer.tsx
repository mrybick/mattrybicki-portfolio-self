export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-6 md:px-12 py-8">
      <div className="text-foreground-mono font-mono text-center text-mono-label">
        This site was hand-coded, ~1,100 lines, no AI authoring.
        <br />
        <a
          href="https://github.com/mrybick/mattrybicki-portfolio-self"
          target="_blank"
          rel="noopener noreferrer"
          className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left md:hidden-underline md:after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
        >
          Read the source.
        </a>
      </div>
      <div className="flex justify-between">
        <span className="text-mono-label text-foreground-mono uppercase tracking-mono font-mono">
          ® Matt Rybicki 2026
        </span>
        <span className="text-mono-label text-foreground-mono uppercase tracking-mono font-mono">
          Phoenix, AZ
        </span>
      </div>
    </footer>
  );
}
