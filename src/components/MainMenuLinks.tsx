import { AppWindow, Code, Component, House, Presentation } from "lucide-react";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiHtml5, SiReact, SiShadcnui } from "react-icons/si";
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

const menu = [
  {
    heading: "Basic",
    icon: Code,
    links: [
      { href: "/sticky", label: "Sticky" },
      { href: "/flip-text", label: "Flip Text" },
      { href: "/paginasi", label: "Paginasi" },
      { href: "/canvas", label: "Canvas" },
      { href: "/svg", label: "SVG" },
      { href: "/css-background", label: "Css Background" },
      { href: "/typescript-1", label: "Typescript 1" },
      { href: "/typescript-2", label: "Typescript 2" },
      { href: "/typescript-3", label: "Typescript 3" },
    ],
  },
  {
    heading: "Components",
    icon: Component,
    links: [
      { href: "/carousel", label: "Carousel" },
      { href: "/accordion-1", label: "Accordion 1" },
      { href: "/accordion-2", label: "Accordion 2" },
    ],
  },
  {
    heading: "Framer Motion",
    icon: TbBrandFramerMotion,
    links: [
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
    heading: "Shadc ui",
    icon: SiShadcnui,
    links: [{ href: "/shad-accordion", label: "Accordion" }],
  },
  {
    heading: "HTML",
    icon: SiHtml5,
    links: [
      { href: "/html-accordion", label: "Accordion" },
      { href: "/html-carousel", label: "Carousel" },
    ],
  },
  {
    heading: "React",
    icon: SiReact,
    links: [
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
      { href: "/clock", label: "Clock" },
      { href: "/stopwatch", label: "Stopwatch" },
      { href: "/symbol-color", label: "Symbol Color" },
      { href: "/todo", label: "Todo" },
    ],
  },
  {
    heading: "Landing",
    icon: Presentation,
    links: [
      { href: "/landing-1", label: "Landing 1" },
      { href: "/landing-2", label: "Landing 2" },
    ],
  },
];

export function MainMenuLinks() {
  const { closeMm } = useMm();
  return (
    <Command>
      <div className="flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2">
          <House className="size-5" /> <div className="font-bold">Tamivite</div>
        </Link>
        <CommandInput placeholder="Search main menu.." />
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
