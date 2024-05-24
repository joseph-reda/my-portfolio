import React, { useContext } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MyContext from "./MyContext";

export const Footer = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark footer" : "footer"}>
      <div className="container pt-5 text-center">
        <div className="d-flex gap-3 justify-content-center pb-3">
          <a
            href="https://github.com/joseph-reda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="http://www.linkedin.com/in/joseph-reda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>Copyright © nehru_gamal</p>
      </div>
    </div>
  );
};
