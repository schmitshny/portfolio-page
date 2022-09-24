import { CSSProperties } from "react";
import "./Skill.scss";

const Skill: React.FC<{
  skills: string[];
  style?: CSSProperties;
  stackStyles?: CSSProperties;
}> = ({ skills, style, stackStyles }) => {
  return (
    <section className="container" style={style}>
      {skills.map((skill) => {
        return (
          <div className="container__skill" style={stackStyles}>
            {skill}
          </div>
        );
      })}
    </section>
  );
};

export default Skill;
