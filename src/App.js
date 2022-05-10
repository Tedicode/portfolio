// import logo from "./logo.svg";
import { useState } from "react";
import sun from "./sun-copy.jpeg";
import CardCollection from "./components/card-collection";
import ContactMe from "./components/contact-me";
import Spotlight from "./components/spotlight";
import "./App.css";
import NavOptions from "./components/nav-options";

const webProjects = [
  {
    title: "NeighborFave",
    content:
      "A full-stack progressive web app for neighbors exchanging favors and chat. (Our capstone project at FSA)",
    link: "https://github.com/cs-team-02/neighbor-fave",
  },
  {
    title: "Chocolatier",
    content: "An E-commerce site for chocolates. (A Team project at FSA)",
    link: "https://graceshopper-chocolates.herokuapp.com/",
  },
];

const otherProjects = [
  {
    title: "Art",
    content: "Some of my Canvas Paintings",
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
  const [topic, setTopic] = useState("Tedi");
  const changeTopic = (nextTopic) => {
    setTopic(nextTopic);
  };

  return (
    <div className="App">
      <header className="App-header"></header>

      <img src={sun} className="App-logo" alt="logo" />
      <Spotlight topic={topic} />
      <NavOptions changeTopic={changeTopic} />

      <div className="container">
        <span className="cluster web">
          <CardCollection projects={webProjects} />
        </span>
        <ContactMe />
        <span className="cluster non-web">
          <CardCollection projects={otherProjects} />
        </span>
      </div>
    </div>
  );
}

export default App;
