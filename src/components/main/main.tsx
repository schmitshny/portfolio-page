import Button from "../UI/Button";
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { downloadPDF } from "../../util/util";
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
          <a
            href="https://github.com/schmitshny"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="contact__icon">
          <a href="#">
            <FontAwesomeIcon icon={faFileInvoice} onClick={downloadPDF} />
          </a>
        </div>
      </aside>
    </main>
  );
};

export default Main;
