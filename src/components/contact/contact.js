import React, { useRef } from "react";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import "./contact.css";
import emailjs from '@emailjs/browser';

// Social links array defined outside the component
const socialLinks = [
  {
    href: "https://github.com/EdricYeo117",
    src: Github,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jin-rong-yeo-83996b272/",
    src: LinkedIn,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/yjr117?igsh=MXJmdmV1OW1xbGgzYQ==",
    src: Instagram,
    alt: "Instagram",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form reference:", form.current); // Debug line
    console.log("Sending email..."); // Debug line
    emailjs.sendForm('service_m70w0yb', 'template_o8famch', form.current, 'TDqba9dawNWpVDkZ3')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });

    // Optionally clear the form after submission
    // e.target.reset();
  };

  return (
    <section className="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to contact me
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" className="name" required />
          <input type="email" name="user_email" placeholder="Email" className="email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="message"
            required
          ></textarea>
          <button type="submit" value="Send" className="contactButton">
            Submit
          </button>
        </form>
        <div className="linksContainer">
          {socialLinks.map((link, index) => (
            <div className="linkWrapper" key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.src} alt={link.alt} className="link" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
