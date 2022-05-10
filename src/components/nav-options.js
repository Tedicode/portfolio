import Topic from "./topic";
import "../App.css";

export default function NavOptions(props) {
  return (
    <div className="nav-options">
      <Topic changeTopic={props.changeTopic} name="About Me" />
      <Topic changeTopic={props.changeTopic} name="My Skills" />
      <Topic changeTopic={props.changeTopic} name="Education" />
      <Topic changeTopic={props.changeTopic} name="My Work" />
    </div>
  );
}
