import React from "react";
import Card from "./card";
import "../App.css";

export default function CardCollection(props) {
  return (
    <div className="card-collection">
      {props.projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          content={project.content}
          link={project.link}
        />
      ))}
    </div>
  );
}
