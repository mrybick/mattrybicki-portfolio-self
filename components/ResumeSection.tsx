"use client";

import { Entry } from "@/app/resume/page";

interface ResumeSectionProps {
  title: string;
  entries: Entry[];
  activeLane: "finance" | "sales";
  openId: string | null;
  setOpenId: (openId: string | null) => void;
  number: number;
  meta: string;
}

export default function ResumeSection({
  title,
  entries,
  activeLane,
  openId,
  setOpenId,
  number,
  meta,
}: ResumeSectionProps) {
  const sectionNum = String(number + 1).padStart(2, "0");
  return (
    <section>
      <h2 className="grid grid-cols-[56px_1fr_auto] items-center gap-6 border-b pb-4 mt-24">
        <span className="font-mono text-mono-label text-foreground-mono text-center">
          {sectionNum}
        </span>
        <span className="text-display-md">{title}</span>
        <span className="font-mono uppercase text-mono-label text-foreground-mono text-right">
          {" "}
          {meta}
        </span>
      </h2>
      {entries
        .filter((entry) => entry.bullets[activeLane].length > 0)
        .map((entry, i) => {
          const dateDisplay = entry.isPresent
            ? `${entry.dateStart} - Present`
            : entry.dateEnd
              ? `${entry.dateStart} - ${entry.dateEnd}`
              : entry.dateStart;
          const num = String(i + 1).padStart(2, "0");
          return (
            <div
              className="cursor-pointer transition-[opacity,padding] hover:opacity-60 duration-300 border-b border-divider py-4 hover:px-3"
              key={entry.id}
              onClick={() => setOpenId(openId === entry.id ? null : entry.id)}
            >
              <div className="grid grid-cols-[56px_1fr_auto] gap-x-6 items-center">
                <span className="font-mono text-mono-label text-foreground-mono text-center">
                  {num}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-h2">{entry.title}</span>
                  <span className="font-mono uppercase text-mono-label text-foreground-mono">
                    {entry.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-mono-label text-foreground-mono">
                    {dateDisplay}
                  </span>
                  <span
                    className={`font-mono text-foreground-mono transition-transform duration-300 ease-out ${
                      openId === entry.id ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
                <div
                  className={`col-start-2 col-end-4 grid transition-[grid-template-rows,margin] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]  ${
                    openId === entry.id ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-1.5 list-disc pl-5 marker:text-foreground-mono text-sm">
                      {entry.bullets[activeLane].map((bullet, bi) => (
                        <li key={bi}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
