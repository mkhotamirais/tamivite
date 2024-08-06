import { FaBars, FaXmark, FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePorto } from "./usePorto";

const menus = ["about", "skills", "projects", "contact"];

export default function Header() {
  return (
    <>
      <header className={`z-50 border-b h-16 sticky top-0 bg-white`}>
        <div className="flex h-full gap-4 items-center justify-between px-3 lg:px-16">
          <Logo />
          <div className="hidden sm:block w-full">
            <NavMain />
          </div>
          <div className="flex gap-4 items-center text-xl w-full sm:w-auto ml-4">
            <SourceCode />
          </div>
          <div className="block sm:hidden">
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
}

export const Logo = ({ className }: { className?: string }) => (
  <Link
    to=""
    className={`${className} flex flex-col gap-1 bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500 bg-clip-text`}
  >
    <div className="text-xl font-semibold leading-none text-transparent">Mkhotami</div>
    <div className="text-sm leading-none text-transparent">Portofolio</div>
  </Link>
);

export const NavContent = ({ onClick, className }: { onClick?: () => void; className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const aboutElement = document.getElementById("about");
    const skillsElement = document.getElementById("skills");
    const projectsElement = document.getElementById("projects");
    const contactElement = document.getElementById("contact");

    const aboutTop = aboutElement ? aboutElement.offsetTop - 360 : 0;
    const skillsTop = skillsElement ? skillsElement.offsetTop - 360 : 0;
    const projectsTop = projectsElement ? projectsElement.offsetTop - 360 : 0;
    const contactTop = contactElement ? contactElement.offsetTop - 360 : 0;

    window.addEventListener("scroll", () => {
      if (window.scrollY < aboutTop) setActive(null);
      if (window.scrollY >= aboutTop) setActive("about");
      if (window.scrollY >= skillsTop) setActive("skills");
      if (window.scrollY >= projectsTop) setActive("projects");
      if (window.scrollY >= contactTop) setActive("contact");
    });
  }, []);

  return menus.map((item, i) => (
    <a
      onClick={onClick}
      href={`#${item}`}
      key={i}
      className={`${className} ${active == `${item}` ? "text-cyan-600" : ""} capitalize hover:text-cyan-600`}
    >
      {item}
    </a>
  ));
};

export const NavBtn = () => {
  const { nav, toggleNav } = usePorto();

  return (
    <button onClick={toggleNav} className={`${nav ? "rotate-180" : ""} text-xl flex transition-all duration-150`}>
      {nav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

export const NavCollapse = ({ className }: { className?: string }) => {
  const { nav, hideNav } = usePorto();
  return (
    <nav
      className={`${className} bg-white shadow-lg z-50 fixed w-full top-16 flex flex-col rounded-b-lg px-3 ${
        nav ? "scale-100" : "scale-y-0"
      } origin-top pt-2 pb-4 border-b block sm:hidden overflow-hidden transition-all duration-150`}
    >
      <NavContent onClick={hideNav} className={"py-2 border-b"} />
    </nav>
  );
};

export const NavMain = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} hidden sm:flex gap-3 ml-2 md:ml-6`}>
      <NavContent className={"flex gap-3"} />
    </div>
  );
};

export const SourceCode = ({ className }: { className?: string }) => {
  return (
    <a href="https://github.com/mkhotamirais/mkhotami-portofolio" className={`${className}`}>
      <FaGithub />
    </a>
  );
};
