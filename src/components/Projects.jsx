import "./Projects.css";
import React, { useContext } from "react";
import MyContext from "./MyContext";

import img1 from "../images/download.png";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={state.isDarkMode === "dark" ? "dark project" : "project"}>
      <div className="container">
        <h2 className="text-center">Latest Project</h2>

        <div className="row d-flex gap-5">
          <div className="card col-lg-4 align-items-center">
            <img src={img1} alt="" />
            <span>2024</span>
            <h4>Youtube Clone</h4>
          </div>

          <div className="card col-lg-7 col-md-8 col-sm-12  d-flex align-items-center">
            <span>Description</span>
            <p>
              By using react, real_api and tailwindcss I have created a
              youtube-clone
            </p>
            <div className="d-flex w-100 justify-content-between">
              <a
                href="https://github.com/joseph-reda/Youtube-Clone"
                className="d-flex gap-2 align-items-center ms-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </a>
              <a
                href="https://youtube-clone-amber-kappa.vercel.app/"
                className="d-flex gap-2 align-items-center me-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Vist</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
