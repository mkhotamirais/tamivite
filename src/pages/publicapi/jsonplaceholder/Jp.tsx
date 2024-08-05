import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Jp() {
  return (
    <div className="min-h-[calc(100vh-5rem)] gap-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-5xl text-center">Public Api Jsonplaceholder</h1>
      <div className="flex gap-3 text-xl">
        <Button asChild size={"lg"} variant={"outline"} className="rounded-full">
          <Link to="users" className="">
            Users
          </Link>
        </Button>
        <Button asChild size={"lg"} variant={"outline"} className="rounded-full">
          <Link to="users" className="">
            Posts
          </Link>
        </Button>
      </div>
    </div>
  );
}
