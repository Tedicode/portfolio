import SkillCollection from "./skill-collection";
import AboutMe from "./about-me";

const listOfSkills = [
  { name: "Python" },
  { name: "Ruby" },
  { name: "SQL" },
  { name: "HTML5" },
];

export default function Spotlight(props) {
  const { topic } = props;

  console.log(topic);
  return (
    <div className="spotlight">
      {topic === "About Me" ? <AboutMe /> : <div></div>}
      {topic === "My Skills" ? (
        <SkillCollection skillsList={listOfSkills} />
      ) : (
        <div></div>
      )}
      {/* <SkillCollection skillsList={listOfSkills} /> */}
    </div>
  );
}
