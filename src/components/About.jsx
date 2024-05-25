import React, { useContext } from "react";
import "./About.css";
import me from "../images/mr1.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import MyContext from "./MyContext";

export const About = () => {
  const { state } = useContext(MyContext);

  return (
    <div className={state.isDarkMode === "dark" ? "dark about" : "about"}>
      <div className="container">
        <h2>About ME</h2>
        <div className="row">
          <div className="left col-md-3 col-sm-12 card">
            <img className="rounded-4" src={me} alt="" />

            <div className="body">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faBootstrap} />
            </div>
          </div>

          <div className="right col-md-9 sol-sm-12 d-flex align-items-end flex-column justify-content-center">
            <div className="col-md-10 ">
              <div className="card">
                <div className="card-header d-flex gap-1">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faCircle} />
                </div>

                <div className="card-body">
                  <h5 className=""> Hi :)</h5>
                  <p className="card-text fs-5">
                    I am eager to introduce myself and express my interest in
                    joining your company. I am solely seeking an interview
                    because I am confident in my ability to persuade and
                    showcase my skills. With proficiency in front-end
                    development, especially with React.js Additionally, I have
                    created more than 15 projects using JavaScript and React,
                    CSS frameworks [Tailwind, Bootstrap], and have experience
                    using API platforms like Postman. I am prepared to
                    contribute to your projects. I'm excited to join your team.
                    Thank you for considering my CV. !You don't want to miss the
                    opportunity to chat with someone talented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
