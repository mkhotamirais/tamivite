import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MouseEvent, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const projectsMenu = [
  {
    title: "Todo",
    href: "/todo",
    isPrimary: true,
    description: `This project involves implementing four todo apps, each with identical functionality but utilizing different tools for their respective implementations. All the apps are designed with a consistent user interface, leveraging ShadCN UI for a cohesive and polished appearance.`,
    tools: ["react", "shadcn", "tailwind", "react-hot-toast", "sonner", "notistack"],
  },
  {
    title: "Omdbapi",
    href: "/omdbapi",
    isPrimary: true,
    description: `The project retrieves data from a public API called OMDB API and presents it in a grid system. It includes features like searching, filtering, and detailed views for each item, offering a comprehensive and user-friendly interface.`,
    tools: ["react", "tailwind", "framer-motion", "omdbapi"],
  },
  {
    title: "Sistem Toko",
    href: "/sisko",
    isPrimary: true,
    description: `The project fetches data from a public API called "Sistem Toko" and displays it in a grid system. It includes filtering, searching, sorting, detailed item views, a shopping cart with add/remove options, checkout, and address selection for delivery.`,
    tools: ["react", "tailwind", "sistem-toko", "react-hot-toast"],
  },
  {
    title: "Jsonplaceholder",
    href: "/jsonplaceholder",
    isPrimary: true,
    description: `The project fetches data from a public API called JSONPlaceholder, retrieving user and post data. It displays this information in grid cards and tables, with detailed views for each entry. Additionally, the project includes pagination to manage large datasets efficiently.`,
    tools: ["react", "tailwind", "jsonplaceholder"],
  },
  {
    title: "Landing 1",
    href: "/landing-1",
    isPrimary: false,
    description:
      "This is a static website with a responsive landing page featuring a background image. The design includes a slider-like display, enhancing visual appeal and user engagement.",
    tools: ["html", "css", "javascript"],
  },
  {
    title: "Landing 2",
    href: "/landing-2",
    isPrimary: false,
    description:
      "This is a static website with a responsive landing page featuring a background video. The design is very simple and minimalistic.",
    tools: ["html", "css", "javascript"],
  },
  {
    title: "Clock",
    href: "/clock",
    isPrimary: false,
    description:
      "This is a wall clock designed to show the current time. It provides a clear and accurate display of hours and minutes, making it a functional and stylish addition to any room.",
    tools: ["react", "tailwind", "svg"],
  },
  {
    title: "stopwatch",
    href: "/stopwatch",
    isPrimary: false,
    description:
      "This is a stopwatch that tracks time in hours, minutes, and seconds. It features start, skip, and reload buttons for controlling the timing functions, allowing users to easily measure and manage elapsed time.",
    tools: ["react", "tailwind"],
  },
  {
    title: "Nurul Iman",
    hrefEx: "/static-web/nuruliman/index.html",
    isPrimary: false,
    description:
      "This is a website for a school named Nurul Iman, which is still under development. It provides general information about the school.",
    tools: ["html", "css", "javascript"],
  },
  {
    title: "Symbol Color",
    hrefEx: "/symbol-color",
    isPrimary: false,
    description:
      "This project provides information on 44 different colors, including their names, HEX codes, RGB values, characteristics, psychological effects, and usage. Users can select their desired color to view detailed descriptions and utilize a search feature to find specific colors easily.",
    tools: ["react", "tailwind"],
  },
  {
    title: "Static Web",
    href: "/html-static-web",
    isPrimary: false,
    description: `These are some simple static websites that I have followed and learned from various YouTube channels and bootcamps.`,
    tools: ["html", "css", "javascript"],
  },
];

const badges = [...new Set(projectsMenu.flatMap((project) => project.tools))];

export default function Projects() {
  const { pathname } = useLocation();
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);
  const filteredProjectsMenu =
    pathname === "/projects"
      ? projectsMenu
          .filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()))
          .filter((item) => selectedBadge.every((badge) => item.tools.includes(badge)))
          .sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1))
      : projectsMenu
          .filter((item) => item.isPrimary)
          .sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1));

  const onBadge = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const badge: string = target?.innerText;
    selectedBadge.includes(badge)
      ? setSelectedBadge((prev) => prev.filter((p) => p !== badge))
      : setSelectedBadge((prev) => [...prev, badge]);
  };

  return (
    <div className="px-3 py-8 sm:px-12 lg:px-32 min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-cyan-500">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      {pathname === "/projects" && (
        <Input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Search project.."
          className="bg-cyan-100/15 mb-2"
        />
      )}
      {pathname === "/projects" && (
        <div className="flex gap-1 flex-wrap my-3 justify-center">
          {badges.map((item, i) => (
            <Badge
              variant={selectedBadge.includes(item) ? "secondary" : "default"}
              key={i}
              className="cursor-pointer"
              onClick={onBadge}
            >
              {item}
            </Badge>
          ))}
        </div>
      )}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {filteredProjectsMenu.map((item, i) => (
          <Card key={i} className="group relative bg-cyan-100 flex flex-col overflow-hidden">
            <div className="translate-y-full group-hover:translate-y-0 transition absolute inset-0 top-3/4 z-10 flex items-center justify-center bg-black/20">
              <Button asChild variant="outline" className="rounded-full px-8" size={"sm"}>
                {item.href ? <Link to={item.href}>Visit</Link> : <a href={item.hrefEx}>Visit</a>}
              </Button>
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-1 flex-wrap">
              {item.tools.map((itm) => (
                <Badge variant="default" key={itm}>
                  {itm}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      {pathname !== "/projects" && (
        <div className="flex justify-center">
          <Button size="lg" className="rounded-full">
            <Link to="/projects">See All Projects</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
