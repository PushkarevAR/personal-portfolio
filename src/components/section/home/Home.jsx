import React from "react";
import ButtonLink from "../../button/ButtonLink";
import { home } from "./Home.module.scss";

function Home() {
  return (
    <section className={home}>
      <div>
        <h3>Alexey</h3>
        <h4>Pushkarev</h4>
        <h5>Front-end developer</h5>
        <p>
          Hellow there, I'm frontend developer from Russia, and it's my personal
          web porfolio or resume or somthing else... You decide.
        </p>
        <p>
          I created it in educational perposes, to test my skills ,but you also
          can find here some information about me, my skills and expirience. And
          feel free to follow me on social ;)
        </p>
        <ButtonLink to={"/"} content={"Click here"} />
        <ButtonLink to={"/"} content={<i className="fab fa-github-alt"></i>} />
        <ButtonLink to={"/"} content={<i className="fab fa-twitter"></i>} />
        <ButtonLink to={"/"} content={<i className="fab fa-linkedin-in"></i>} />
      </div>
    </section>
  );
}

export default Home;
