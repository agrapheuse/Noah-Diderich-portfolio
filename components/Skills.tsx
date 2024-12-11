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
  const [visible, setVisible] = useState(false);

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      setVisible(false);
      setTimeout(() => setSelectedSkill(null), 500);
    } else {
      setSelectedSkill(skill);
      setVisible(true);
    }
  };

  return (
    <div id="skills" className="m-4 lg:m-10 py-12">
      <Card className="card-style my-4 lg:m-12">
        <h2 className="h2-style">Skills</h2>
        <div className="skills-row-style mb-6">
          {Object.keys(skillsJson.skills).map((key) => (
            <div
              key={key}
              className="skills-item-style"
              onClick={() => handleSkillClick(key)}
            >
              <Image
                src={skillsJson.skills[key].logo || ""}
                alt={key}
                className="w-12 h-12 object-contain"
                width="12"
                height="12"
              />
            </div>
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            visible ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {selectedSkill && skillsJson.skills[selectedSkill]?.related && (
            <div className="divider mx-4 mt-6 mb-4 h-[2px] bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600"></div>
          )}

          {selectedSkill && skillsJson.skills[selectedSkill]?.related && (
            <div className="skills-row-style m-8">
              {Object.keys(skillsJson.skills[selectedSkill].related).map(
                (relatedKey) => (
                  <div key={relatedKey} className="skills-item-style">
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
              )}
            </div>
          )}
        </div>
      </Card>

      <Card className="card-style lg:m-12 ">
        <h2 className="h2-style">Tools</h2>
        <div className="skills-row-style mb-10">
          {Object.keys(skillsJson.tools).map((key) => (
            <div
              key={key}
              className="skills-item-style"
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
