import React from "react";
import "../App.css";

export default function Card(props) {
  return (
    <a className="card" href={props.link}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </a>
  );
}
