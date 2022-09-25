import "./Modal.scss";
import closeMenuIcon from "../../images/ham-menu-close.svg";

const Modal: React.FC<{ open: boolean; onClose: () => void; name: string }> = ({
  open,
  name,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContainer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="message">
          <h4 className="message__header">
            Thank you <span>{name}</span>
          </h4>
          <p className="message__info">Your message has been sent.</p>
          <div className="message__close" onClick={onClose}>
            <img src={closeMenuIcon} alt="close Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
