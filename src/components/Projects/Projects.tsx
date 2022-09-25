// import Button from "../UI/Button";
import "./Projects.scss";
import Project from "./Project";
import whereaboutsProjectImage from "../../images/whereaboutsproject.png";
import playerProjectImage from "../../images/playerProject.png";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <header className="project__header">
        <h2 className="heading-main">PROJECTS</h2>
        <p className="heading-sub">
          Here you will find some of the personal and clients projects that I
          created.
        </p>
      </header>
      <main className="project__main">
        <Project
          title="Whereabouts"
          details="Whereabouts is a platform where you can share the amazing places you have visited with other people."
          image={whereaboutsProjectImage}
          linkToGithub="https://github.com/schmitshny/whereabouts"
          linkToPage="https://whereabouts-app-f.herokuapp.com/"
          skills={[
            "react",
            "typescript",
            "redux toolkit",
            "axios",
            "scss",
            "node",
            "express",
            "mongodb",
            "mongoose",
          ]}
        />
        <Project
          title="Player"
          details="
          Website for VOD service."
          image={playerProjectImage}
          linkToGithub="https://github.com/schmitshny/player"
          linkToPage="https://player-d58bb.firebaseapp.com/"
          skills={[
            "react",
            "javascript",
            "redux",
            "styled components",
            "firebase",
          ]}
        />
      </main>
    </section>
  );
};

export default Projects;
