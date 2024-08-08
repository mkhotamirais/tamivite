import { AppWindow, Code, Component, Globe, Home, House } from "lucide-react";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Link } from "react-router-dom";
import { useMm } from "@/hooks/useMm";
import { FaNodeJs } from "react-icons/fa6";

const menu = [
  {
    heading: "Home",
    icon: Home,
    links: [
      { href: "/home-menu", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/portofolio-legacy", label: "Portofolio Legacy" },
    ],
  },
  {
    heading: "Basic",
    icon: Code,
    links: [
      { href: "/basic-menu", label: "Basic" },
      { href: "/sticky", label: "Sticky" },
      { href: "/flip-text", label: "Flip Text" },
      { href: "/paginasi", label: "Paginasi" },
      { href: "/canvas", label: "Canvas" },
      { href: "/svg", label: "SVG" },
      { href: "/css-background", label: "Css Background" },
      { href: "/typescript-1", label: "Typescript 1" },
      { href: "/typescript-2", label: "Typescript 2" },
      { href: "/typescript-3", label: "Typescript 3" },
      { href: "/google-font-pairing", label: "Google Font Pairing" },
    ],
  },
  {
    heading: "Components",
    icon: Component,
    links: [
      { href: "/components-menu", label: "Components" },
      { href: "/carousel", label: "Carousel" },
      { href: "/accordion-1", label: "Accordion 1" },
      { href: "/accordion-2", label: "Accordion 2" },
    ],
  },
  {
    heading: "Public Api",
    icon: TbApi,
    links: [
      { href: "/publicapi-menu", label: "Public Api" },
      { href: "/jsonplaceholder", label: "Jsonplaceholder" },
      { href: "/omdbapi", label: "Omdbapi" },
      { href: "/fakestoreapi", label: "Fakestoreapi" },
      { href: "/newsapi", label: "Newsapi" },
      { href: "/sisko", label: "Sistem Toko" },
    ],
  },
  {
    heading: "Nodejs",
    icon: FaNodeJs,
    links: [
      { href: "/nodejs-menu", label: "NodeJs" },
      { href: "/express", label: "Express" },
      { href: "/api-mysql-v1", label: "Api Mysql V1" },
      { href: "/mysql", label: "Mysql" },
      { href: "/mongodb", label: "Mongodb" },
    ],
  },
  {
    heading: "Framer Motion",
    icon: TbBrandFramerMotion,
    links: [
      { href: "/framer-menu", label: "Framer Motion" },
      { href: "/progress-bar-1", label: "Progress Bar 1" },
      { href: "/bulb-1", label: "Bulb 1" },
      { href: "/bulb-2", label: "Bulb 2" },
      { href: "/parallax", label: "Parallax" },
      { href: "/float-nav-1", label: "Float Nav 1" },
      { href: "/float-nav-2", label: "Float Nav 2" },
      { href: "/float-nav-3", label: "Float Nav 3" },
    ],
  },
  {
    heading: "React",
    icon: SiReact,
    links: [
      { href: "/react-menu", label: "React" },
      { href: "/use-state", label: "useState" },
      { href: "/use-effect", label: "useEffect" },
      { href: "/use-ref", label: "useRef" },
      { href: "/use-context", label: "useContext" },
      { href: "/use-callback", label: "useCallback" },
      { href: "/use-memo", label: "useMemo" },
      { href: "/use-reducer", label: "useReducer" },
      { href: "/memo", label: "memo" },
    ],
  },
  {
    heading: "Apps",
    icon: AppWindow,
    links: [
      { href: "/apps-menu", label: "Apps" },
      { href: "/clock", label: "Clock" },
      { href: "/stopwatch", label: "Stopwatch" },
      { href: "/symbol-color", label: "Symbol Color" },
      { href: "/todo", label: "Todo" },
    ],
  },
  {
    heading: "Web Design",
    icon: Globe,
    links: [
      { href: "webdesign-menu", label: "Web Design" },
      { href: "/landing-1", label: "Landing 1" },
      { href: "/landing-2", label: "Landing 2" },
      { href: "/html-accordion", label: "Accordion" },
      { href: "/html-carousel", label: "Carousel" },
      { href: "/html-static-web", label: "Static Web" },
    ],
  },
];

export function MainMenuLinks() {
  const { closeMm } = useMm();
  return (
    <Command>
      <div className="flex items-center justify-between p-3 shadow">
        <Link to="/" onClick={closeMm} className="flex items-center gap-2">
          <House className="size-5" /> <div className="font-bold">Tamivite</div>
        </Link>
        <CommandInput className="w-28" placeholder="Search menu.." />
      </div>
      <CommandList className="h-[40vh]">
        <CommandEmpty>No results found.</CommandEmpty>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menu.map((item, key) => (
            <CommandGroup
              key={key}
              heading={
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <div>{item.heading}</div>
                </div>
              }
            >
              {item.links.map((itm, i) => (
                <CommandItem key={i} asChild className="cursor-pointer">
                  <Link to={itm.href} onClick={closeMm}>
                    {itm.label}
                  </Link>
                </CommandItem>
              ))}
              <CommandSeparator />
            </CommandGroup>
          ))}
        </div>
      </CommandList>
    </Command>
  );
}
