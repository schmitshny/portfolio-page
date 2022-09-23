import "./Project.scss";
import Button from "../UI/Button";
import React from "react";

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
      <img src={image} alt="project" />
      <header className="content-title ">{title}</header>
      <p className="content-details">{details}</p>
      <div className="buttons-container">
        <Button text={buttonText} />
        <Button text="Source code" />
      </div>
    </div>
  );
};

export default Project;
