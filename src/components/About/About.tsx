import { HashLink } from "react-router-hash-link";
import Button from "../UI/Button";
import Skill from "../UI/Skill";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <header className="about__header">
        <h2 className="heading-main">About me</h2>
        <p className="heading-sub">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </header>
      <section className="about__section">
        <header className="content-title ">Get to know me!</header>
        <p className="content-details">
          I'm a <span className="bold">Frontend Web Developer</span> building
          the Front-end of Websites and Web Applications that leads to the
          success of the overall product. Check out some of my work in the
          Projects section. <br />
          <br /> I am a fourth year student in the field of
          <span className="bold"> computer science.</span>
          <br />
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
        <HashLink smooth to="#contact">
          <Button text="Contact" />
        </HashLink>
      </section>
      <section className="about__skills">
        <header className="content-title about__skills__header">
          My Skills
        </header>
        <section className="about__skills__container">
          <Skill
            skills={[
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "SAss",
              "REAct",
              "Redux",
              "Redux Toolkit",
              "Basics of Node.js",
              "rest",
              "Express",
              "GraphQl",
              "Basic c#/c++",
              "sql",
              "Nosql",
              "MongoDb",
            ]}
          />
        </section>
      </section>
    </section>
  );
};

export default About;
