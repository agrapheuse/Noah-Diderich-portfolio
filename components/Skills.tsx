"use client";

import skillsJsonData from "@/skills.json";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./ui/card";

type RelatedSkill = {
  logo: string;
  link: string;
};

type Skill = {
  logo: string;
  link: string;
  related: Record<string, RelatedSkill>;
};

type SkillsJson = {
  skills: Record<string, Skill>;
  tools: Record<string, RelatedSkill>;
};

const skillsJson: SkillsJson = skillsJsonData;

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };

  return (
    <div className="skills-tools">
      <Card className="skills-container bg-foreground m-12">
        <h1 className="flex justify-center p-4 text-3xl font-bold text-gray-300 font-[family-name:var(--font-geist-mono)]">
          Skills
        </h1>
        <div className="skills-row flex justify-center gap-8 p-4 [&:hover>div]:opacity-50">
          {Object.keys(skillsJson.skills).map((key) => (
            <div
              key={key}
              className="skill-item hover:!opacity-100 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 cursor-pointer flex flex-col items-center justify-center w-24 h-24 bg-foreground shadow-md"
              onClick={() => handleSkillClick(key)}
            >
              <Image
                src={skillsJson.skills[key].logo || ""}
                alt={key}
                className="w-16 h-16 object-contain"
                width="8"
                height="8"
              />
            </div>
          ))}
        </div>

        {selectedSkill && skillsJson.skills[selectedSkill]?.related && (
          <div className="divider mx-4 mt-6 mb-4 h-[2px] bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600"></div>
        )}

        {selectedSkill && skillsJson.skills[selectedSkill]?.related && (
          <div className="related-skills-row flex justify-center gap-8 p-4 [&:hover>div]:opacity-50">
            {Object.keys(skillsJson.skills[selectedSkill].related).length ? (
              Object.keys(skillsJson.skills[selectedSkill].related).map(
                (relatedKey) => (
                  <div
                    key={relatedKey}
                    className="related-skill-item hover:!opacity-100 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 cursor-pointer flex flex-col items-center justify-center w-24 h-24 bg-foreground shadow-md"
                  >
                    <a
                      href={
                        skillsJson.skills[selectedSkill].related[relatedKey]
                          .link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center mt-2 text-blue-500 underline"
                    >
                      <Image
                        src={
                          skillsJson.skills[selectedSkill].related[relatedKey]
                            .logo || ""
                        }
                        alt={relatedKey}
                        className="w-12 h-12 object-contain"
                        width="8"
                        height="8"
                      />
                    </a>
                  </div>
                )
              )
            ) : (
              <p className="text-gray-500">No related skills available</p>
            )}
          </div>
        )}
      </Card>
      <Card className="tools-container bg-foreground m-12">
        <h1 className="flex justify-center p-4 text-3xl font-bold text-gray-300 font-[family-name:var(--font-geist-mono)]">
          Tools
        </h1>
        <div className="tools-row flex justify-center gap-8 p-4">
          {Object.keys(skillsJson.tools).map((key) => (
            <div
              key={key}
              className="tool-item bg-gradient-to-r from-red-600 to-violet-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 cursor-pointer flex flex-col items-center justify-center w-24 h-24 bg-foreground shadow-md"
              onClick={() => handleSkillClick(key)}
            >
              <Image
                src={skillsJson.tools[key].logo || ""}
                alt={key}
                className="w-16 h-16 object-contain"
                width="8"
                height="8"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
