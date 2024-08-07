import { Button } from "@/components/ui/button";
import { useMm } from "@/hooks/useMm";
import Projects from "./home/Projects";
import { MeButtons } from "@/components/MeButtons";

export default function Home() {
  const { mm, openMm, closeMm, me, openMe, closeMe } = useMm();
  const onClick = () => {
    mm ? closeMm() : openMm();
  };
  const onClickMe = () => {
    me ? closeMe() : openMe();
  };

  return (
    <div className="relative">
      <MeButtons />
      <div className="p-3 min-h-screen flex flex-col text-center items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-cyan-500">
        <div className="mb-8 flex gap-4 flex-col">
          <h1 className={"text-4xl text-center font-bold drop-shadow-md"}>Welcome</h1>
          <p className="text-xl text-muted-foreground">
            I am <span className="text-gray-800 font-semibold">Khotami</span>, I am a web developer, my focus is{" "}
            <span className="text-gray-800 font-semibold">Mern/ NextJs</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={onClickMe} variant="outline" className="rounded-full w-32">
            About Me
          </Button>
          <Button className="rounded-full w-32" onClick={onClick}>
            Explore
          </Button>
        </div>
      </div>
      <Projects />
    </div>
  );
}
