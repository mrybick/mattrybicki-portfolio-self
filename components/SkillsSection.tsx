"use client";

import { Skill } from "@/app/resume/page";

interface SkillsSectionProps {
  skills: Skill[];
  activeLane: "finance" | "sales";
}

export default function SkillsSection({ skills, activeLane }: SkillsSectionProps) {
  return (
    <section>
      {skills
        .filter((skill) => skill.skills[activeLane].length > 0)
        .map((skill) => {
          return (
            <div key={skill.category}>
              <span>{skill.category}</span>
              <span>{skill.skills[activeLane].join(" · ")}</span>
            </div>
          );
        })}
    </section>
  );
}
