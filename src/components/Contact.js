// Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Breadcrumbs from "./BreadCrumbs";
import "./Comman.css";

const Contact = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <section id="contact" className="container">
      <Breadcrumbs paths={breadcrumbsPaths} />
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        Feel free to reach out for collaboration or inquiries.
      </p>
      <ul className="contact-list list-unstyled">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span style={{ color: "black" }}> kumarmukesh.tgc@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <span style={{ color: "black" }}> LinkedIn</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <span style={{ color: "black" }}>GitHub</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span style={{ color: "black" }}>6393xxxxx4</span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
