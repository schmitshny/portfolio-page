import Button from "../UI/Button";
import Skill from "../UI/Skill";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
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
          <br /> I also like sharing content related to the stuff that I have
          learned over the years in Web Development so it can help other people
          of the Dev Community. Feel free to Connect or Follow me on my Linkedin
          where I post useful content related to Web Development and Programming
          <br />
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
        <Button text="Contact" />
      </section>
      <section className="about__skills">
        <header className="content-title about__skills__header">
          My Skills
        </header>
        <section className="about__skills__container">
          <Skill
            skills={[
              "html",
              "html",
              "html",
              "html",
              "html",
              "html",
              "html",
              "Express Basics",
            ]}
          />
        </section>
      </section>
    </section>
  );
};

export default About;
