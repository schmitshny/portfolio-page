// import Button from "../UI/Button";
import "./Projects.scss";
import Project from "./Project";
import project from "../../images/project.jpeg";

const Projects = () => {
  return (
    <section className="project">
      <header className="project__header">
        <h2 className="heading-main">PROJECTS</h2>
        <p className="heading-sub">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </header>
      <main className="project__main">
        <Project
          title="Whereabouts"
          details="Yubter is a platform that I created where people can join the community
        of their favorite youtube channels and can be part of the conversation."
          image={project}
          buttonText="See demo"
        />
        <Project
          title="Whereabouts"
          details="Yubter is a platform that I created where people can join the community
        of their favorite youtube channels and can be part of the conversation."
          image={project}
          buttonText="See demo"
        />
      </main>
    </section>
  );
};

export default Projects;
