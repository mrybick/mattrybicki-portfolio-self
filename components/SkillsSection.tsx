"use client";

import { Skill } from "@/app/resume/page";

interface SkillsSectionProps {
  skills: Skill[];
  activeLane: "finance" | "sales";
}

export default function SkillsSection({ skills, activeLane }: SkillsSectionProps) {
  return (
    <section>
      <h2 className="grid grid-cols-[56px_1fr_auto] items-center gap-6 border-b pb-4 mt-24">
        <span className="font-mono text-mono-label text-foreground-mono text-center">07</span>
        <span className="text-display-md">Skills</span>
        <span className="font-mono uppercase text-mono-label text-foreground-mono text-right">
          By category
        </span>
      </h2>

      {skills
        .filter((skill) => skill.skills[activeLane].length > 0)
        .map((skill, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <div
              key={skill.category}
              className="grid grid-cols-[56px_140px_1fr] gap-x-6 items-baseline py-4 border-b border-divider"
            >
              <span className="font-mono text-mono-label text-foreground-mono">{num}</span>
              <span className="font-mono uppercase text-mono-label text-foreground-mono">
                {skill.category}
              </span>
              <div className="flex flex-wrap gap-y-1.5 text-sm text-foreground-muted">
                {skill.skills[activeLane].map((item, j) => (
                  <span
                    key={j}
                    className="after:content-['-'] after:mx-3 after:text-foreground-faint last:after:content-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
    </section>
  );
}
