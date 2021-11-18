import React from "react";
import ButtonLink from "../button/ButtonLink";
import ContentContainer from "./ContentContainer";
import Skill from "../skill/Skill";
import { section } from "./Section.module.scss";

const home = {
  title: (
    <>
      <h3>Alexey</h3>
      <h4>Pushkarev</h4>
      <h5>Front-end developer</h5>
    </>
  ),
  text: (
    <>
      <p>
        Hellow there, I'm frontend developer from Russia, and it's my personal
        web porfolio / resume / somthing else... You decide.
      </p>
      <p>
        I created it in educational perposes, to test my skills, but you also
        can find here some information about me, my skills and expirience. Feel
        free to contact me.
      </p>
    </>
  ),
  footer: (
    <>
      <ButtonLink
        to={"mailto:pm.pushkarev.ar@gmail.com"}
        content={"Contact me"}
      />
      <ButtonLink
        to={"https://github.com/PushkarevAR"}
        content={<i className="fab fa-github-alt"></i>}
      />
      <ButtonLink
        to={"https://www.linkedin.com/in/pushkarev-ar/"}
        content={<i className="fab fa-linkedin-in"></i>}
      />
    </>
  ),
};

const about = {
  title: <h3>About</h3>,
  text: (
    <>
      <p>
        I started my career as a programmer with a backend and low-level
        programming: creating software for sensors and small devices on C# and
        C++ and various microcontrollers programming.
      </p>
      <p>
        For the last time, I’ve been passionate about frontend technology
        learning and this is where I see my future. Now I want to keep improving
        myself as a developer in a team on large projects.
      </p>
    </>
  ),
};

const skills = {
  title: <h3>Skills</h3>,
  text: (
    <>
      <Skill icon={<i className="fab fa-html5"></i>} title={"HTML"} />
      <Skill
        icon={<i className="fab fa-css3-alt"></i>}
        title={"CSS, SASS, SCSS, LESS"}
      />
      <Skill
        icon={<i className="fab fa-react"></i>}
        title={"JavaScript (ES6), React"}
      />
      <Skill
        icon={<i className="fab fa-github-alt"></i>}
        title={"Git, GitHub"}
      />
      <Skill icon={<i className="fas fa-box-open"></i>} title={"Webpack"} />
      <Skill
        icon={<i className="fas fa-edit"></i>}
        title={"Photoshop, Affinity"}
      />
    </>
  ),
};

function Section() {
  return (
    <div className={section}>
      <ContentContainer
        title={home.title}
        text={home.text}
        footer={home.footer}
      />
      <ContentContainer title={about.title} text={about.text} />
      <ContentContainer
        title={skills.title}
        text={skills.text}
        footer={skills.footer}
      />
    </div>
  );
}

export default Section;
