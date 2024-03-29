import React from "react";

import ButtonLink from "../button/ButtonLink";
import ContentContainer from "./ContentContainer";
import Skill from "../skill/Skill";
import Education from "../education/Education";
import Gfx from "../gfx/Gfx";
// import Header from "../header/Header";

import styles from "./Section.module.scss";

import picHome from "../../img/home.svg";
import picAbout from "../../img/about.svg";
import picSkills from "../../img/skills.svg";
import picEducation from "../../img/education.svg";

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
  pic: picHome,
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
  pic: picAbout,
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
        title={"JavaScript (ES6), TypeScript, React"}
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
  pic: picSkills,
};

const education = {
  title: <h3>Education</h3>,
  text: (
    <>
      <Education
        icon={<i className="fas fa-user-graduate"></i>}
        title={"Master - Information security"}
        university={
          "Peter the Great St. Petersburg Polytechnic University 2019-2021"
        }
        description={
          "Graduation project: The Usage of post-quantum cryptography protocols in edge computing systems. \n Fav projects: Software for Ad-Hoc network with pre-fractal topology."
        }
      />
      <Education
        icon={<i className="fas fa-university"></i>}
        title={"Bachelor - Information technologies and communication systems"}
        university={"Southern Federal University 2015-2019"}
        description={
          "Graduation project: The model of the communication channel with differential quadrature phase shift keying in the ADS. \n Fav projects: precision inclinometer sensor interface software (C#), quadcopter flight controller programming (C++)."
        }
      />
    </>
  ),
  pic: picEducation,
};

const gfx = {
  title: <h3>GFX</h3>,
  text: <Gfx />,
};

function Section() {
  return (
    <div className={styles.section}>
      {/* <Header /> */}
      <ContentContainer
        id="home"
        title={home.title}
        text={home.text}
        footer={home.footer}
        pic={home.pic}
        onRight={true}
        upId="gfx"
        downId="about"
      />
      <ContentContainer
        id="about"
        title={about.title}
        text={about.text}
        pic={about.pic}
        onRight={false}
        upId="home"
        downId="skills"
      />
      <ContentContainer
        id="skills"
        title={skills.title}
        text={skills.text}
        pic={skills.pic}
        onRight={true}
        upId="about"
        downId="education"
      />
      <ContentContainer
        id="education"
        title={education.title}
        text={education.text}
        pic={education.pic}
        onRight={false}
        upId="skills"
        downId="gfx"
      />
      <ContentContainer
        id="gfx"
        title={gfx.title}
        text={gfx.text}
        onRight={true}
        upId="education"
        downId="home"
      />
    </div>
  );
}

export default Section;
