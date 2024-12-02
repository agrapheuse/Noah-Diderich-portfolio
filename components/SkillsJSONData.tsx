type RelatedSkill = {
  logo: string;
  link: string;
};

type Skill = {
  logo: string;
  link: string;
  related: Record<string, RelatedSkill>;
};

export type SkillsJson = {
  skills: Record<string, Skill>;
  tools: Record<string, Skill>;
};
