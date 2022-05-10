import "../../App.css";
import Skill from "../skill";

export default function SkillCollection(props) {
  return (
    <div className="skill-collection">
      <Skill name="Node.js" />
      {props.skillsList.map((skill) => (
        <Skill name={skill.name} />
      ))}
    </div>
  );
}
