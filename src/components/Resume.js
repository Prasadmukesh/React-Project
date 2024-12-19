// Resume.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import BreadCrumbs from "./BreadCrumbs";
import Skills from "./Skills";
import "./Comman.css";

const Resume = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Resume", to: "/resume" },
  ];

  return (
    <section id="resume" className="container text-center">
      {/* Include the Breadcrumbs component */}
      <BreadCrumbs paths={breadcrumbsPaths} />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
            Resume
          </h2>
          <p className="section-description">
            Download my resume to learn more about my professional experience
            and skills.
          </p>
              <p>Hello I am Mukesh </p>
            
          <a
            href="path/to/your/resume.pdf"
            className="resume-download-btn"
            download
          >
            Download Resume
          </a>
          {/* Include the Skills component here */}
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
