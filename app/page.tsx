import HeroBleed from "@/components/HeroBleed";

export default function Home() {
  const milestones = [
    {
      year: "2023",
      line1: "Start at ASU.",
      line2: "90 hrs pre-licensing.",
      posClass: "left-0",
      transformClass: "",
      eventAnchor: "left-0 text-left",
    },
    {
      year: "2024",
      line1: "AZ REALTOR® licensed.",
      line2: "Joined Keller Williams.",
      posClass: "left-1/4",
      transformClass: "-translate-x-1/2",
      eventAnchor: "left-1/2 -translate-x-1/2 text-center",
    },
    {
      year: "2025",
      line1: "Marketing BS approved.",
      line2: "By Rybicki launches.",
      posClass: "left-1/2",
      transformClass: "-translate-x-1/2",
      eventAnchor: "left-1/2 -translate-x-1/2 text-center",
    },
    {
      year: "2026",
      line1: "Sales Scholar · ProSales Director.",
      line2: "Finance double major.",
      posClass: "left-3/4",
      transformClass: "-translate-x-1/2",
      eventAnchor: "left-1/2 -translate-x-1/2 text-center",
    },
    {
      year: "2027",
      line1: "Graduate ASU.",
      line2: "Dual B.S.",
      posClass: "right-0",
      transformClass: "",
      eventAnchor: "right-0 text-right",
    },
  ];

  return (
    <main>
      {/* start section 00 */}
      <section className="min-h-screen grid grid-cols-2 px-6 md:px-12 py-12 border-foreground relative overflow-hidden">
        {" "}
        {/* the hero wrapper */}
        <div className="flex flex-col justify-between pr-8 border-r border-divider">
          {" "}
          {/* the left column */}
          <div className="flex justify-between items-baseline border-b border-foreground pb-3.5 font-mono uppercase tracking-mono text-mono-label text-foreground">
            {" "}
            {/* top row */}
            <span>
              <span className="text-foreground-mono">00 / </span>Portfolio
            </span>
            <span className="text-foreground-mono">v2 / 2026</span>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 py-12 md:py-24">
            {" "}
            {/* middle (name + lede) */}
            <h1 className="text-display-xl font-medium leading-[0.96] tracking-display text-foreground">
              Matthew J. Rybicki
            </h1>
            <p className="text-body-lg font-normal leading-[1.45] text-foreground-muted max-w-[38ch]">
              Senior at Arizona State. People in one degree, money in the other, code on the side.
            </p>
          </div>
          <div className="flex justify-between items-baseline border-t border-foreground pt-3.5 font-mono uppercase tracking-mono text-mono-label text-foreground">
            {" "}
            {/* bottom row */}
            <div className="gap-4 flex flex-wrap">
              {" "}
              {/* tags wrapper - flex with gap */}
              <span>Finance</span>
              <span className="text-foreground-faint">·</span>
              <span>Real Estate</span>
              <span className="text-foreground-faint">·</span>
              <span>Marketing</span>
            </div>
            <span>Phoenix, AZ</span>
          </div>
        </div>
        <HeroBleed />
      </section>{" "}
      {/* end section 00 */}

      {/* start section 01 */}
      <section id="timeline" className="hidden md:block px-6 md:px-12 py-24 border-b border-divider">
        <div className="grid grid-cols-[3.5rem_1fr_auto] gap-6 items-baseline pb-12">
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            01
          </span>
          <h2 className="text-display-md font-medium tracking-heading text-foreground">
            a path, set on an <span className="italic">axis</span>.
          </h2>
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            2023 / 2027
          </span>
        </div>

        <div className="relative h-px bg-foreground mx-[4%] my-32">
          {milestones.map((m) => (
            <div key={m.year} className={`absolute top-0 ${m.posClass} ${m.transformClass}`}>
              <span
                className={`absolute -top-12 ${m.eventAnchor} whitespace-nowrap font-mono uppercase tracking-mono text-mono-xs text-foreground-mono`}
              >
                {m.line1}
                <br />
                {m.line2}
              </span>
              <span className="block pt-3 font-mono uppercase tracking-mono text-mono-label text-foreground whitespace-nowrap">
                {m.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
