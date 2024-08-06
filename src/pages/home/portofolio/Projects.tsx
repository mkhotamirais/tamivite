import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const projectsList = [
  {
    name: "public api",
    description:
      "This project showcases data retrieved from public APIs, including Jsonplaceholder, OmdbAPI, FakestoreAPI, SistemToko, and NewsAPI. The data is presented in a grid system card format, ensuring compatibility across various viewport sizes. Features include dark mode, breadcrumbs, data filtering, and search functionality to enhance user experience and accessibility. The development of this project is approximately 70% complete, as additional public APIs will be integrated.",
    tools:
      "Front-end: React, Redux, Axios, Reacticons, Tailwindcss; Back-end: Public APIs (Jsonplaceholder, OmdbAPI, FakestoreAPI, SistemToko, and NewsAPI)",
    githubLink: "https://github.com/mkhotamirais",
    demoLink: "https://tamivite.vercel.app/omdbapi",
  },
  {
    name: "todo",
    description:
      "This project explores 3 todo list implementations with identical CRUD functionality. Each uses different tools: some leverage React hooks useState, useEffect, useContext, and useReducer, while another employs Redux. Notifications vary: some are basic, while others utilize Notistack or React Hot Toast libraries. All data is stored in local storage. The development progress of this project has reached 96%. Despite appearing complete, there is a possibility that additional features will be added in the future.",
    tools: "Front-end: React, Redux, Tailwindcss, React-Icons, notistack, react-hot-toast; Back-end: localStorage",
    githubLink: "https://github.com/mkhotamirais",
    demoLink: "https://tamivite.vercel.app/todo",
  },
  {
    name: "mern khotami",
    description:
      "This project displays product data in a table and grid system layout. The data is retrieved from a MongoDB database and managed on the server side using Express.js. It includes authentication and authorization features where only admins can manage the data, while guests and users have restricted access. The project also offers search, filtering, and sorting functionalities, as well as pagination. Additionally, it is responsive to different viewports and includes a dark mode feature. The development of this project is approximately 80% complete, as the cart and invoice features have not yet been implemented.",
    tools:
      "Front-end: React, Redux, ReactIcons, Tailwindcss, React-hot-toast. Backend: Nodejs, Expressjs, Mongoose. Bcrypt, Jwt, etc.",
    githubLink: "https://github.com/mkhotamirais/mern-khotami",
    demoLink: "https://mern-khotami.vercel.app/",
  },
  {
    name: "hadinalmusri",
    description:
      "This is a website project for Hadinalmusri School in Pagaden Subang, operating solely on the client-side. It displays information including the profile, editorial team, advertisement information, gallery, contact, and career opportunities. It also features a dark mode. The development of this project is currently at 70%, with plans to develop the backend in the future.",
    tools: "Front-end: React, Redux, React-router-dom, Tailwindcss, React-Icons.",
    githubLink: "https://github.com/mkhotamirais/hadinalmusri",
    demoLink: "https://hadinalmusri.com/",
  },
];

const Projects = () => {
  const [active, setActive] = useState("public api");
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {projectsList.map((item, i) => (
          <button
            onClick={() => setActive(item.name)}
            key={i}
            className={`${
              item.name === active ? "bg-blue-600 text-white" : ""
            } border rounded-lg p-2 capitalize font-medium`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {projectsList.map((item, i) => (
        <div key={i} className={`${item.name === active ? "block" : "hidden"} gap-3 flex flex-col lg:flex-row`}>
          <div className="border flex-1 rounded-lg p-1 overflow-hidden shadow">
            <iframe src={item.demoLink} className="w-full h-96 lg:h-full bg-white" />
          </div>
          <div className={`border flex-1 rounded-lg p-3 leading-relaxed flex flex-col gap-2 shadow`}>
            <div className="capitalize">
              <span className="font-medium">Name : </span>
              {item.name}
            </div>
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-2 hover:text-blue-500 max-w-min"
            >
              <FaGithub /> Github
            </a>
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex items-center gap-2 hover:text-blue-500 max-w-min"
            >
              <FaGlobe /> Demo
            </a>
            <div>
              <span className="font-medium">Description : </span>
              {item.description}
            </div>
            <div>
              <span className="font-medium">Tools : </span>
              {item.tools}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
