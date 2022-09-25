import "./Project.scss";
import Button from "../UI/Button";
import React from "react";
import Skill from "../UI/Skill";

interface ProjectProps {
  title: string;
  details: string;
  image: any;
  skills: string[];
  linkToGithub: string;
  linkToPage: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  details,
  image,
  skills,
  linkToGithub,
  linkToPage,
}) => {
  return (
    <div className="singleproject">
      <div className="singleproject__image">
        <img src={image} alt="project" />
        <div className="overlay">
          <h2>Check This Out!</h2>
        </div>
      </div>

      <section className="singleproject__container">
        <header className="content-title ">{title}</header>
        <p className="content-details">{details}</p>
        <Skill
          skills={skills}
          style={{ justifyContent: "center", gap: "1.1rem" }}
          stackStyles={{ fontSize: "1.1rem", padding: "0.5rem 1rem" }}
        />
        <div className="buttons-container">
          <a href={linkToPage} target="_blank" rel="noreferrer">
            <Button text="Preview" />
          </a>
          <a href={linkToGithub} target="_blank" rel="noreferrer">
            <Button text="Source code" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
