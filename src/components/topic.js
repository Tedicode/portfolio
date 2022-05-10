import "../App.css";

export default function Topic(props) {
  return (
    <div className="topic-card" onClick={() => props.changeTopic(props.name)}>
      {props.name}
    </div>
  );
}
