import imgSocial from "../images/social.png";
import imgMovie from "../images/movie.png";
import imgRest from "../images/rest.png";
import imgYt from "../images/yt.png";
import imgHung from "../images/hung.png";
import imgEconommec from "../images/econommec.png";
import imgEconommec_redux from "../images/econommec-redux.png";
import imgYoutube from "../images/download.png";
import imgGemini from "../images/gemini-clone.png";

import "./MyProjects.css";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const myProject = [
  {
    id: 9,
    category: "react",
    using: "react.js, real_api, tailwindcss",
    imgSrc: imgYoutube,
    linkGithub: "https://github.com/joseph-reda/Youtube-Clone",
    linkPage: "https://youtube-clone-amber-kappa.vercel.app/",
    header: "Youtube Clone",
    title:
      "By using react, real_api and tailwindcss I have created a youtube-clone",
  },
  {
    id: 8,
    category: "react",
    using: "react.js, real_api, tailwindcss",
    imgSrc: imgGemini,
    linkGithub: "https://github.com/joseph-reda/gemini-clone",
    linkPage: "https://gemini-clone-rosy-zeta.vercel.app/",
    header: "Gemini Clone",
    title:
      "By using react, real_api and tailwindcss I have created a Gemini Clone",
  },
  {
    id: 7,
    category: "react",
    using: "react, axios, bootstrap",
    imgSrc: imgMovie,
    linkGithub: "https://github.com/joseph-reda/movie-app",
    linkPage: "https://movie-app-ivory-zeta.vercel.app/",
    header: "Movie App",
    title:
      "It is a site for searching for movies and putting them in two lists: the ones you have watched or the ones you want to watch. It is a single page using react-router. I used reactHooks such as useState, useEffect and useContext and useReducer, and I also used the axios library in dealing with the API.",
  },
  {
    id: 6,
    category: "react",
    using: "react.js, tailwindcss",
    imgSrc: imgEconommec_redux,
    linkGithub: "https://github.com/joseph-reda/Ecommerce-Redux/tree/master",
    linkPage: "https://ecommerce-redux-chi.vercel.app/",
    header: "E-commerce-Redux",
    title:
      "This is one of my works, which is an e-commerce business. I used React.js, Redux Toolkit and tailwindcss",
  },
  {
    id: 5,
    category: "react",
    using: "react.js, tailwindcss",
    imgSrc: imgEconommec,
    linkGithub: "https://github.com/joseph-reda/e-commerce",
    linkPage: "https://e-commerce-liard-one.vercel.app/",
    header: "E-commerce",
    title:
      "This is one of my works, which is an e-commerce business. I used React.js and tailwindcss",
  },

  {
    id: 4,
    category: "js",
    using: "jsPure, real api, Axios, tailwindcss",
    imgSrc: imgSocial,
    linkGithub: "https://github.com/joseph-reda/social-media",
    linkPage: "https://social-media-dun-eight.vercel.app/",
    header: "social media",
    title:
      "It is a mini application for social networking applications. It includes creating a new account and registering, as well as publishing posts and placing a commint, because I use it on this   website, API Real, and also the axios library and tailwindcss.",
  },

  {
    id: 3,
    category: "react",
    using: "react, bootstrap, fortawesome",
    imgSrc: imgRest,
    linkGithub: "https://github.com/joseph-reda/restaurant",
    linkPage: "https://restaurant-lake-sigma.vercel.app/",
    header: "Resturant App",
    title:
      "It is a front-end for a restaurant using the reactjs framework and also the css bootstrap framework, but I have not dealt with real apis.",
  },

  {
    id: 2,
    category: "js",
    using: "react, materialUi, tailwindcss",
    imgSrc: imgYt,
    linkGithub: "https://github.com/joseph-reda/YT-website",
    linkPage: "https://yt-website-seven.vercel.app/",
    header: "Yt Website",
    title:
      "It is a front end for a travel website and was training to deal with react, materialUi and tailwindcss",
  },

  {
    id: 1,
    category: "js",
    using: "html-css-js",
    imgSrc: imgHung,
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
