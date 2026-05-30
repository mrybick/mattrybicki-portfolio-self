"use client";

import HeroBleed from "@/components/HeroBleed";

export default function Home() {
  const selected_work = [
    {
      id: 1,
      displayname: "Real Estate",
      tag1: "KW",
      tag2: "Brokerage",
      since_yr: 2024,
      url: "https://byrybicki.com",
    },
    {
      id: 2,
      displayname: "Media",
      tag1: "By Rybicki Media",
      tag2: "Photography",
      since_yr: 2025,
      url: "https://byrybickimedia.com",
    },
    {
      id: 3,
      displayname: "PlainComp",
      tag1: "SaaS",
      tag2: "AVM",
      since_yr: 2026,
      url: "https://plaincomp.com",
    },
    {
      id: 4,
      displayname: "ASU",
      tag1: "Education",
      tag2: "3D Map - Coming Soon",
      since_yr: 2023,
      url: "#",
    },
  ];

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

  const tag = "mrybick2";
  const edu = "asu.edu";

  return (
    <main>
      {/* start section 00 */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 py-12 border-foreground relative overflow-hidden">
        {" "}
        {/* the hero wrapper */}
        <div className="flex flex-col justify-between md:pr-8 md:border-r border-divider">
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
            <h1 className="text-display-xl fadeUp font-medium leading-[0.96] tracking-display text-foreground">
              Matthew J. Rybicki
            </h1>
            <p className="text-body-lg font-normal fadeUp leading-[1.45] text-foreground-muted max-w-[38ch]">
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
      <section id="timeline" className="px-6 md:px-12 py-24 border-b border-divider">
        <div className="grid grid-cols-[3.5rem_1fr_auto] gap-6 items-baseline pb-12">
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            01
          </span>
          <h2 className="text-h1 md:text-display-md font-medium tracking-heading text-foreground">
            a path, set on an <span className="italic">axis</span>.
          </h2>
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            2023 / 2027
          </span>
        </div>

        <div className="hidden md:block relative h-px bg-foreground mx-[4%] my-32">
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
        <div className="md:hidden">
          {milestones.map((m) => (
            <div key={m.year} className="border-l border-foreground pl-6 pb-8">
              <span className="tracking-mono block mb-1 font-mono uppercase text-mono-label text-foreground">
                {m.year}
              </span>
              {m.line1}
              <br />
              {m.line2}
            </div>
          ))}
        </div>
      </section>{" "}
      {/* end section 01 */}
      {/* start section 02 */}
      <section id="selected_work" className="px-6 md:px-12 py-24 border-b border-divider">
        <div className="grid grid-cols-[3.5rem_1fr_auto] gap-6 items-baseline pb-12">
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            02
          </span>
          <h2 className="text-h1 md:text-display-md font-medium tracking-heading text-foreground">
            selected work.
          </h2>
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            entries.
          </span>
        </div>
        <div>
          <ul>
            {selected_work.map((sw) => (
              <li key={sw.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={sw.url}
                  className="grid group transition-all duration-300 hover:px-5 ease-out grid-cols-[3.5rem_1fr_auto] gap-6 items-baseline py-6 border-b border-divider"
                >
                  <div className="text-left border-r">
                    <span className="p-1 font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
                      {sw.id}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-display-md font-light">{sw.displayname}</h3>
                    <span className="flex gap-2 text-mono-label font-mono uppercase tracking-mono text-foreground-mono">
                      {sw.tag1} · {sw.tag2} / Since {sw.since_yr}
                    </span>
                  </div>
                  <span className="group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300 ease-out">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* section 03 start */}
      <section id="contact" className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-[3.5rem_1fr_auto] gap-6 items-baseline pb-12">
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            03
          </span>
          <h2 className="text-h1 md:text-display-md font-medium tracking-heading text-foreground">
            let{"'"}s connect.
          </h2>
          <span className="font-mono uppercase tracking-mono text-mono-label text-foreground-mono">
            email
          </span>
        </div>
        <div className="flex flex-col gap-8 items-start">
          <a
            href="#"
            className="text-display-md font-light tracking-heading text-foreground hover:text-foreground-mono transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const joined = `${tag}@${edu}`;
              window.location.href = `mailto:${joined}`;
            }}
          >
            Email Me.
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground font-mono uppercase tracking-mono text-mono-label text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const joined = `${tag}@${edu}`;
              window.location.href = `mailto:${joined}`;
            }}
          >
            email me →
          </a>
        </div>
      </section>
    </main>
  );
}
