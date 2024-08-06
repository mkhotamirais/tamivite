import { Button } from "@/components/ui/button";
import { useMm } from "@/hooks/useMm";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Projects from "./home/Projects";

export default function Home() {
  const { mm, openMm, closeMm } = useMm();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    mm ? closeMm() : openMm();
  };

  return (
    <div className="relative">
      <div className="absolute flex gap-2 right-3 top-3 sm:right-8 sm:top-5">
        <Button asChild size="icon" className="rounded-full" variant="secondary">
          <a title="linked account" href="https://www.linkedin.com/in/mkhotami-rais/">
            <FaLinkedin className="size-4" />
          </a>
        </Button>
        <Button asChild size="icon" className="rounded-full" variant="secondary">
          <a title="github account" href="https://github.com/mkhotamirais">
            <FaGithub className="size-4" />
          </a>
        </Button>
      </div>
      <div className="p-3 min-h-screen flex flex-col text-center items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-cyan-500">
        <div className="mb-8 flex gap-4 flex-col">
          <h1 className={"text-4xl text-center font-bold drop-shadow-md"}>
            Welcome <span className="capitalize">Visitors</span>
          </h1>
          <p className="text-xl">
            I am <b>Khotami</b>, I am a web developer, my focus is <b>MERN / NextJs</b>
          </p>
        </div>
        <Button onClick={onClick} size="lg" className="rounded-full">
          Explore
        </Button>
      </div>
      <Projects />
    </div>
  );
}
