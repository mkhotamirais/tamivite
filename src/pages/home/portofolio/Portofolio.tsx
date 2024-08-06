import { CgFileDocument } from "react-icons/cg";
import Projects from "./Projects";
import { Button, ContactLink, H1, Section, SkillLink } from "./PortoComponent";
import { GmailIcons8, LinkedinIcons8, WhatsAppIcons8 } from "./IconsSvg";
import {
  BootstrapIcon,
  CssIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  ViteIcon,
} from "./Icons";
import Hero from "./Hero";
import Header from "./Header";
import { usePorto } from "./usePorto";
import Footer from "./Footer";

const contactMenus = [
  {
    text: "087766606133",
    href: "https://api.whatsapp.com/send/?phone=6287766606133",
    icon: <WhatsAppIcons8 size="48" />,
  },
  { text: "Mkhotami Rais", href: "https://www.linkedin.com/in/mkhotami-rais/", icon: <LinkedinIcons8 size="48" /> },
  { text: "tami01.job@gmail.com", href: "mailto:mkhotamirais@gmail.com", icon: <GmailIcons8 size="48" /> },
];

const skillIcons = [
  { text: "HTML", icon: <HtmlIcon />, url: "https://www.w3schools.com/html/default.asp" },
  { text: "CSS", icon: <CssIcon />, url: "https://www.w3schools.com/css/default.asp" },
  { text: "Vite", icon: <ViteIcon />, url: "https://vitejs.dev/" },
  { text: "GitHub", icon: <GitHubIcon />, url: "https://github.com/" },
  { text: "Git", icon: <GitIcon />, url: "https://git-scm.com/" },
  { text: "MySql", icon: <MysqlIcon />, url: "https://www.mysql.com" },
  { text: "Bootstrap", icon: <BootstrapIcon />, url: "https://getbootstrap.com/" },
  { text: "Tailwindcss", icon: <TailwindIcon />, url: "https://tailwindcss.com/" },
  { text: "Javascript", icon: <JavascriptIcon />, url: "https://www.w3schools.com/js/default.asp" },
  { text: "Node.js", icon: <NodejsIcon />, url: "https://nodejs.org/en" },
  { text: "React", icon: <ReactIcon />, url: "https://react.dev/" },
  { text: "Express", icon: <ExpressIcon />, url: "https://expressjs.com/" },
  { text: "Mongodb", icon: <MongodbIcon />, url: "https://www.mongodb.com/" },
];

export default function Portofolio() {
  const { nav, hideNav } = usePorto();

  const handleMain = () => {
    if (nav) hideNav();
  };

  return (
    <>
      <Header />
      <main onClick={handleMain}>
        <Hero />
        <Section id="about">
          <H1>About Me</H1>
          <div className="p-5 rounded-xl mt-3 leading-loose border mx-auto md:w-full xl:w-2/3 shadow-lg">
            <p className="mb-2">
              Graduated from UIN Jakarta in 2022 with a major in Arabic Language and Literature. Developed an interest
              in web programming and subsequently learned JavaScript and ReactJS to enhance front-end development
              skills. Expanded expertise by learning NodeJS and MongoDB for server-side and database management,
              respectively.
            </p>
            <p className="mb-5">
              Successfully created single-page applications and managed RESTful APIs. Proficient in computer use since
              high school, especially with MS Office, and skilled in data management using MS Excel and basic VBA.
              Dedicated to pursuing a career in web programming as a MERN Stack Developer.
            </p>

            <a
              href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/edit"
              target="blank"
              rel="noopener noreferrer"
            >
              <Button type="button" className={"py-3 px-6 my-3 rounded-lg flex items-center gap-2"}>
                <CgFileDocument className="text-xl inline-block" /> View CV
              </Button>
            </a>
          </div>
        </Section>
        <Section id="skills" className={`overlay`}>
          <H1>Skills</H1>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
            {skillIcons.map((item, i) => (
              <SkillLink key={i} item={item} />
            ))}
          </div>
        </Section>
        <Section id="projects">
          <H1>Projects</H1>
          <Projects />
        </Section>
        <Section id="contact">
          <H1>Contact Me</H1>
          <div className="text-base md:text-lg grid grid-rows-3 sm:grid-cols-3 gap-3 py-3">
            {contactMenus.map((item, i) => (
              <ContactLink key={i} text={item.text} href={item.href} icon={item.icon} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
