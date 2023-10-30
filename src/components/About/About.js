import React from "react";
import "./About.css";
import Portfolio1 from "../../assets/portfolio-1.png";

function About() {
  return (
    <section>
      <h2>About </h2>
      <img src={Portfolio1} alt="portfolio1" />
      <div>
        <ul>
          <li>
            <h1>Frontend Developer</h1>
            <p>
              I'm a frontend developer with experience in building responsive
              and optimised site
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <h1>Backend Developer</h1>
            <p>
              I have knowledge on developing fast and optimised back end systems
              and APIs
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
