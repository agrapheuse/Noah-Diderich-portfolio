"use client";

import skillsJsonData from "@/skills.json";
import Image from "next/image";
import { useState } from "react";

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
      <h1 className="flex justify-center p-4 text-3xl font-bold">Skills</h1>
      <div className="skills-container">
        <div className="skills-row flex justify-center gap-4 p-4">
          {Object.keys(skillsJson.skills).map((key) => (
            <div
              key={key}
              className="skill-item cursor-pointer flex flex-col items-center"
              onClick={() => handleSkillClick(key)}
            >
              <Image
                src={skillsJson.skills[key].logo || ""}
                alt={key}
                className="w-16 h-16 object-contain"
                width="8"
                height="8"
              />
              <span className="text-center mt-2">{key}</span>
            </div>
          ))}
        </div>

        {selectedSkill && skillsJson.skills[selectedSkill]?.related && (
          <div className="related-skills flex justify-center gap-4 mt-4">
            {Object.keys(skillsJson.skills[selectedSkill].related).length ? (
              Object.keys(skillsJson.skills[selectedSkill].related).map(
                (relatedKey) => (
                  <div
                    key={relatedKey}
                    className="related-item flex flex-col items-center"
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
      </div>
      <h1 className="flex justify-center p-4 text-3xl font-bold">Tools</h1>
      <div className="tools-container">
        <div className="tools-row flex justify-center gap-4 p-4">
          {Object.keys(skillsJson.tools).map((key) => (
            <div
              key={key}
              className="tool-item cursor-pointer flex flex-col items-center"
              onClick={() => handleSkillClick(key)}
            >
              <Image
                src={skillsJson.tools[key].logo || ""}
                alt={key}
                className="w-16 h-16 object-contain"
                width="8"
                height="8"
              />
              <span className="text-center mt-2">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
