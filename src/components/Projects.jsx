import "./Projects.css";
import React, { useContext } from "react";
import MyContext from "./MyContext";

import img1 from "../images/12.jpg";

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
            <span>2023</span>
            <h4>Social media website</h4>
          </div>

          <div className="card col-lg-7 col-md-8 col-sm-12  d-flex align-items-center">
            <span>Description</span>
            <p>
              It is a mini application for social networking applications. It
              includes creating a new account and registering, as well as
              publishing posts and placing a commint, because I use it on this
              website, API Real, and also the axios library and tailwindcss.
            </p>
            <div className="d-flex w-100 justify-content-between">
              <a
                href="https://github.com/joseph-reda/social-media"
                className="d-flex gap-2 align-items-center ms-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </a>
                <a
                  href="https://social-media-dun-eight.vercel.app/"
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
