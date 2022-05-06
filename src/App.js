// import logo from "./logo.svg";
import sun from "./sun-copy.jpeg";
import CardCollection from "./components/card-collection";
import SkillCollection from "./components/skill-collection";
import ContactMe from "./components/contact-me";
import "./App.css";

const listOfSkills = [
  { name: "Python" },
  { name: "Ruby" },
  { name: "SQL" },
  { name: "HTML5" },
];

const webProjects = [
  {
    title: "NeighborFave",
    content:
      "A full-stack progressive web app for neighbors exchanging favors and chat",
    link: "https://github.com/cs-team-02/neighbor-fave",
  },
  {
    title: "Chocolatier",
    content: "An E-commerce site for chocolates",
    link: "https://graceshopper-chocolates.herokuapp.com/",
  },
];

const otherProjects = [
  {
    title: "Art",
    content: "Some of my original paintings on ArtPal",
    link: "https://www.artpal.com/FunPaint",
  },
  {
    title: "Blog",
    content:
      "Cybergovernance, digital wellness in the information age, and various Media topics",
    link: "https://cyberoptimism.weebly.com/",
  },
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>About Me paragraph here</p>
      </header> */}
      <img src={sun} className="App-logo" alt="logo" />
      <SkillCollection skillsList={listOfSkills} />
      <div className="container">
        <ContactMe />
        <span className="cluster web">
          <CardCollection projects={webProjects} />
        </span>
        <span className="cluster other">
          <CardCollection projects={otherProjects} />
        </span>
      </div>
    </div>
  );
}

export default App;
