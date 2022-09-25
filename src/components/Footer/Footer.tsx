import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faEnvelope,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { downloadPDF } from "../../util/util";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__intro">
        <div className="footer__intro__cv" onClick={downloadPDF}>
          <h3>
            <FontAwesomeIcon icon={faFileInvoice} />
          </h3>
          <p>DOWNLOAD CV</p>
        </div>
        <div className="footer__intro__email">
          <h3>
            <FontAwesomeIcon icon={faEnvelope} />
          </h3>
          <p>mbugaj93@gmail.com</p>
        </div>
      </section>
      <section className="footer__copyrights">
        <FontAwesomeIcon icon={faSun} />
      </section>
    </footer>
  );
};

export default Footer;
