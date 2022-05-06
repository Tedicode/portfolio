import "../App.css";
import githubIcon from "../github-icon.png";
import linkedInIcon from "../linkedIn-icon.png";

export default function ContactMe(props) {
  return (
    <div className="contact-me">
      <a className="contact-link" href="www.linkedin.com/in/tedilowney">
        <img src={linkedInIcon} height="100px" width="100px" />
      </a>
      <a className="contact-link" href="https://github.com/Tedicode">
        <img src={githubIcon} height="100px" width="100px" />
      </a>
    </div>
  );
}
