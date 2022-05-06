import React from "react";
import Card from "./card";
import "../App.css";

export default function CardCollection(props) {
  return (
    <div className="card-collection">
      <Card
        title="NeighborFave"
        content="A full-stack progressive web app for neighbors exchanging favors and chat"
        link="https://github.com/cs-team-02/neighbor-fave"
      />
      <Card
        title="Chocolatier"
        content="An E-commerce site for chocolates"
        link="https://graceshopper-chocolates.herokuapp.com/"
      />
      <Card
        title="My Art"
        content="See some of my original paintings here at ArtPal"
        link="https://www.artpal.com/SedonaVortex"
      />
    </div>
  );
}
