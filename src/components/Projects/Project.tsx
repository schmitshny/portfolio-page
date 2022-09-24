import "./Project.scss";
import Button from "../UI/Button";
import React from "react";
import Skill from "../UI/Skill";

interface ProjectProps {
  title: string;
  details: string;
  buttonText: string;
  image: any;
}

const Project: React.FC<ProjectProps> = ({
  title,
  details,
  buttonText,
  image,
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
          skills={[
            "html",
            "html",
            "html",
            "html",
            "html",
            "html",
            "html",
            "Express Basics",
            "html",
            "Express Basics",
            "html",
            "Express Basics",
          ]}
          style={{ justifyContent: "center", gap: "1.1rem" }}
          stackStyles={{ fontSize: "1.1rem", padding: "0.5rem 1rem" }}
        />
        <div className="buttons-container">
          <Button text={buttonText} />
          <Button text="Source code" />
        </div>
      </section>
    </div>
  );
};

export default Project;
