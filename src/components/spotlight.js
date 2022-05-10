import SkillCollection from "./Topics/skill-collection";
import AboutMe from "./Topics/about-me";
import Education from "./Topics/education";
import MyWork from "./Topics/my-work";
import Tedi from "./Topics/tedi";

const listOfSkills = [
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "React/Redux" },
  { name: "Express" },
  { name: "Sequelize" },
];

export default function Spotlight(props) {
  const { topic } = props;

  console.log(topic);
  return (
    <div className="spotlight">
      {topic === "Tedi" ? <Tedi /> : <div></div>}
      {topic === "About Me" ? <AboutMe /> : <div></div>}
      {topic === "Education" ? <Education /> : <div></div>}
      {topic === "My Work" ? <MyWork /> : <div></div>}
      {topic === "Skills" ? (
        <SkillCollection skillsList={listOfSkills} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
