import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";

const projectsMenu = [
  {
    title: "Todo",
    href: "/todo",
    isPrimary: true,
    description: `project ini menggunakan apa saja Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              repudiandae quo cupiditate nam est vel deleniti repellendus totam iste.`,
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Omdbapi",
    href: "/omdbapi",
    isPrimary: true,
    description: `project ini menggunakan apa saja Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
              repudiandae quo cupiditate nam est vel deleniti repellendus totam iste.`,
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Jsonplaceholder",
    href: "/jsonplaceholder",
    isPrimary: true,

    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Landing 1",
    href: "/landing-1",
    isPrimary: false,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Landing 2",
    href: "/landing-2",
    isPrimary: false,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Clock",
    href: "/clock",
    isPrimary: true,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "stopwatch",
    href: "/stopwatch",
    isPrimary: false,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Nurul Iman",
    hrefEx: "/static-web/nuruliman/index.html",
    isPrimary: false,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
  {
    title: "Symbol Color",
    hrefEx: "/symbol-color",
    isPrimary: false,
    description: "halo semua",
    tools: ["react", "node", "lainnya"],
  },
];

export default function Projects() {
  const { pathname } = useLocation();

  const filteredProjectsMenu =
    pathname === "/projects"
      ? projectsMenu.sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1))
      : projectsMenu
          .filter((item) => item.isPrimary)
          .sort((a, b) => (a.isPrimary === b.isPrimary ? 0 : a.isPrimary ? -1 : 1));

  return (
    <div className="px-3 py-12 sm:px-12 lg:px-32 min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-cyan-500">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
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
