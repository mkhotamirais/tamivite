import { Container } from "@/components/wrapper";
import { Link, Outlet } from "react-router-dom";

export default function MysV1Layout() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="bg-gray-200 h-16 flex px-3 justify-between items-center">
          <Link to="/api-mysql-v1">Api Mysql V1</Link>
          <div>
            <Link to="/api-mysql-v1/users">Users</Link>
          </div>
        </div>
        <div className="p-3">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
