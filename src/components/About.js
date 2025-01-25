import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
      {/* Meta-tags en Structured Data */}
      <Helmet>
        <title>Over | Xinudesign</title>
        <meta
          name="description"
          content="Ontdek hoe Michaël Redant, freelance marketeer en webdesigner, bedrijven helpt groeien met innovatieve oplossingen."
        />
        <meta
          name="keywords"
          content="Michaël Redant, freelance marketeer, webdesigner, AI-marketing, webdesign oplossingen"
        />
        <meta name="author" content="Michaël Redant" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Michaël Redant",
            "jobTitle": "Freelance Marketeer & Webdesigner",
            "worksFor": {
              "@type": "Organization",
              "name": "Xinudesign",
            },
            "url": "https://xinudesign.be",
            "image": "https://xinudesign.be/assets/img/profile.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/michael-redant",
              "https://github.com/michael-redant",
              "https://www.instagram.com/michael-redant",
              "https://www.facebook.com/michael-redant",
            ],
          })}
        </script>
      </Helmet>

      <div className="profile-wrapper">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="/assets/img/profile.jpg"
              alt="Portret van Michaël Redant, freelance marketeer en webdesigner"
              className="rounded-full"
            />
          </div>
          <h1 className="profile-name">Michaël Redant</h1>
          <h2 className="profile-job">Marketeer & Webdesigner</h2>
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
              {showMore ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
            </div>
            <div className="bio-extra">
              <p>
                Naast mijn werk bij Octopus Accountancy Software ben ik
                freelance marketeer & webdeveloper en ondersteun ik bedrijven
                met unieke, creatieve oplossingen.
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
                <a
                  href="https://www.linkedin.com/in/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profiel van Michaël Redant"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profiel van Michaël Redant"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profiel van Michaël Redant"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/michael-redant"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook profiel van Michaël Redant"
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
