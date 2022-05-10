import SkillCollection from "./Topics/skill-collection";
import AboutMe from "./Topics/about-me";
import Education from "./Topics/education";
import MyWork from "./Topics/my-work";

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
      {topic === "Education" ? <Education /> : <div></div>}
      {topic === "My Work" ? <MyWork /> : <div></div>}
      {topic === "My Skills" ? (
        <SkillCollection skillsList={listOfSkills} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
