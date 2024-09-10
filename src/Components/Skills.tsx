import { SkillInfo } from "../User";
//@ts-ignore
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="px-16 mx-20 my-5 font-mono" id="Skills">
      <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-16  font-bold text-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap gap-5 justify-between">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
