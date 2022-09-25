import { FormEvent, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import "./Contact.scss";

const initialFormData = {
  userName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
    setOpenModal(true);
    console.log(openModal);
  };

  const handleClose = () => {
    setOpenModal(false);
    setFormData(initialFormData);
  };

  useEffect(() => {
    const body = document.querySelector("body")!;
    body.style.overflow = openModal ? "hidden" : "auto";
  }, [openModal]);

  return (
    <>
      <section className="contact" id="contact">
        <header className="contact__header">
          <h2 className="heading-main">CONTACT</h2>
          <p className="heading-sub">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible!
          </p>
        </header>
        <form
          // action="https://formsubmit.co/mbugaj93@gmail.com"
          method="POST"
          className="form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            required
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            value={formData.userName}
          />
          <label htmlFor="">Email</label>
          <input
            placeholder="Enter your email"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="">Message</label>
          <textarea
            placeholder="Enter your message"
            rows={10}
            required
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <Modal open={openModal} onClose={handleClose} name={formData.userName} />
    </>
  );
};

export default Contact;
