import React from "react";
import { about } from "./About.module.scss";

function About() {
  return (
    <section className={about}>
      <div>
        <h3>About</h3>
        <p>
          , for the
          last year I've been studying web technologies on my own. And now I
          want to keep improving myself as a developer in team on large
          projects.
        </p>
        <p>
          Previously, I had experience in software development on c#, python and
          microcontrollers programming. I also love to create design for social
          media.
        </p>
      </div>
    </section>
  );
}

export default About;
