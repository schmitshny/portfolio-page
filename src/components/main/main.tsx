import Button from "../UI/Button";
import "./main.scss";
import githubIcon from "./../../images/github-dark.svg";
const Main = () => {
  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__header__name">Hi, I'm Marcin Bugaj</h1>
        <p className="main__header__info">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Button text="Projects" />
      </header>
      <aside className="contact">
        <div className="contact__icon">
          <img src={githubIcon} alt="github" />
        </div>
        <div className="contact__icon">
          <img src={githubIcon} alt="github" />
        </div>
      </aside>
    </main>
  );
};

export default Main;
