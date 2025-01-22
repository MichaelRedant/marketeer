import React, { useState } from "react";
import "../about.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-container">
      <div className="profile-wrapper">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="/assets/img/profile.jpg"
              alt="Michaël"
              className="rounded-full"
            />
          </div>
          <h1>Michaël Redant</h1>
          <h2>Marketeer & Webdesigner</h2>
        </div>
        <div className="profile-bio">
          <p className="short-description">
            Ik ben een gepassioneerde marketeer en webdesigner die bedrijven
            helpt groeien door innovatieve oplossingen.
          </p>
          <div
            id="profile-bio-wrapper"
            className={showMore ? "show-more-info" : ""}
          >
            <div
              id="show-more-icon"
              onClick={() => setShowMore(!showMore)}
              className="circle-button"
            >
              {showMore ? (
                <FaChevronCircleUp />
              ) : (
                <FaChevronCircleDown />
              )}
            </div>
            <div className="bio-extra">
              <p>
                Naast mijn werk bij Octopus Accountancy Software ben ik
                freelance marketeer & webdeveloper en ondersteun ik bedrijven met unieke,
                creatieve oplossingen.
              </p>
              <p>
                Neem gerust contact op via mijn sociale media of via{" "}
                <a href="mailto:michael@xinudesign.be">email</a>.
              </p>
            </div>
          </div>
          <div className="social-list">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/michael-redant" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/michael-redant" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
