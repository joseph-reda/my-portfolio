import img5 from "../images/16.jpg";
import img1 from "../images/17.jpg";

import "./MyProjects.css";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const myProject = [
  {
    id: 1,
    category: "js",
    using: "js, real api",
    imgSrc: img1,
    linkGithub: "https://github.com/joseph-reda/social-media",
    linkPage: "https://social-media-dun-eight.vercel.app/",
    header: "social media",
    title:
      "It is a mini application for social networking applications. It includes creating a new account and registering, as well as publishing posts and placing a commint, because I use it on this   website, API Real, and also the axios library and tailwindcss.",
  },

  {
    id: 2,
    category: "react",
    using: "react",
    imgSrc: img5,
    linkGithub: "https://github.com/joseph-reda/movie-app",
    linkPage: "https://movie-app-ivory-zeta.vercel.app/",
    header: "Movie App",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nam.",
  },

  {
    id: 3,
    category: "react",
    using: "react",
    imgSrc: img1,
    linkGithub: "https://github.com/joseph-reda/restaurant",
    linkPage: "https://restaurant-lake-sigma.vercel.app/",
    header: "Resturant App",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nam.",
  },

  {
    id: 4,
    category: "js",
    using: "html-css-js",
    imgSrc: img1,
    linkGithub: "https://github.com/joseph-reda/memory-game",
    linkPage: "https://memory-game-lac-one.vercel.app/",
    header: "Memory Game",
    title:
      "The Memory game was an exercise in using JS features and dealing with functions's",
  },
];

export const MyProjects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h2>ALL MY ProJects</h2>

        <div className="row">
          {myProject.map((item) => {
            return (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card">
                  <img src={item.imgSrc} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{item.header}</h3>
                    <h5 className="card-title">Using: ({item.using})</h5>
                    <p className="card-text">{item.title}</p>

                    <div className=" links d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-between">
                        <a
                          className="d-flex gap-2 align-items-center justify-content-between"
                          href={item.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          <span>Github</span>
                        </a>
                      </div>

                      <div className="more">
                        <a
                          className="d-flex gap-2 align-items-center justify-content-between"
                          href={item.linkPage}
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
          })}
        </div>
      </div>
    </div>
  );
};
