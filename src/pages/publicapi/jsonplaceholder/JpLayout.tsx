import { Container } from "@/components/wrapper";
import { Link, Outlet } from "react-router-dom";

export default function JpLayout() {
  return (
    <div className="bg-gray-50">
      <Container>
        <header className="bg-gray-200 flex items-center px-3 h-16">
          <Link to="/jsonplaceholder" className="text-xl border font-bold">
            Jsonpalaceholder
          </Link>
          <div className="flex gap-4 ml-12 border">
            <Link to="/jsonplaceholder/users">Users</Link>
            <Link to="/jsonplaceholder/posts">Posts</Link>
          </div>
        </header>
        <div className="p-3">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
