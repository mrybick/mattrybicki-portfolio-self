export default function Home() {
  return (
    <section className="min-h-screen grid grid-cols-2 px-6 md:px-12 py-12 border-b border-foreground"> {/* the hero wrapper */}
      <div className="flex flex-col justify-between pr-8 border-r border-divider"> {/* the left column */}
        <div className="flex justify-between items-baseline border-b border-foreground pb-3.5 font-mono uppercase tracking-mono text-mono-label text-foreground"> {/* top row */}
          <span><span className="text-foreground-mono">00 / </span>Portfolio</span>
          <span className="text-foreground-mono">v2 / 2026</span>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 py-12 md:py-24"> {/* middle (name + lede) */}
          <h1 className="text-display-xl font-medium leading-[0.96] tracking-display text-foreground">
            Matthew J. Rybicki
          </h1>
          <p className="text-body-lg font-normal leading-[1.45] text-foreground-muted max-w-[38ch]">
            Senior at Arizona State. People in one degree, money in the other, code on the side.
          </p>
        </div>
        <div className="flex justify-between items-baseline border-t border-foreground pt-3.5 font-mono uppercase tracking-mono text-mono-label text-foreground"> {/* bottom row */}

        </div>
      </div>
      <div> {/* right column / bleed — TODO */}

        

      </div>
    </section>
  )
}