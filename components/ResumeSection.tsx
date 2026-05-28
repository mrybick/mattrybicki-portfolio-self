"use client";

import { Entry } from "@/app/resume/page";

interface ResumeSectionProps {
  title: string;
  entries: Entry[];
  activeLane: "finance" | "sales";
  openId: string | null;
  setOpenId: (openId: string | null) => void;
}

export default function ResumeSection({
  title,
  entries,
  activeLane,
  openId,
  setOpenId,
}: ResumeSectionProps) {
  return (
    <section>
      <h2 className="text-h2 border-b p-2 mt-8">{title}.</h2>
      {entries
        .filter((entry) => entry.bullets[activeLane].length > 0)
        .map((entry) => {
          const dateDisplay = entry.isPresent
            ? `${entry.dateStart} - Present`
            : entry.dateEnd
              ? `${entry.dateStart} - ${entry.dateEnd}`
              : entry.dateStart;
          return (
            <div
              className="cursor-pointer p-4 text-display-sm transition-opacity hover:opacity-60 duration-300 border-b border-divider py-4"
              key={entry.id}
              onClick={() => setOpenId(openId === entry.id ? null : entry.id)}
            >
              <div className="flex justify-between items-baseline">
                {entry.title} - {entry.subtitle}
                <span className="text-mono-label text-foreground-mono font-mono transition-colors">
                  {dateDisplay}
                </span>
              </div>
              {openId === entry.id && (
                <ul className="list-disc pl-5">
                  {entry.bullets[activeLane].map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
    </section>
  );
}
