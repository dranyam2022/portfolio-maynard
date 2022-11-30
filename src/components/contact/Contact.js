import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import BackToTopBtn from "../backtotop/BackToTopBtn";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6f5jqdb",
        "template_qv9psft",
        form.current,
        "tU-a1fHLL41l2msR8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>maynardescalante@gmail.com</h5>
            <a
              href="mailto:maynardescalante@gmail.com"
              target="_blank"
              rel="me"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>maynardescalante</h5>
            <a href="https://m.me/maynard.escalante/" target="_blank" rel="me">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+639959706655</h5>
            <a
              href="https://api.whatsapp.com/send?phone+123456789"
              target="_blank"
              rel="me"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <BackToTopBtn />
        </form>
      </div>
    </section>
  );
}

export default Contact;
