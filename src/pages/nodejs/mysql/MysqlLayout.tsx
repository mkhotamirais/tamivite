import { Container } from "@/components/wrapper";
import { Link, Outlet } from "react-router-dom";

export default function MysqlLayout() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="px3">
          <div className="flex justify-between items-center px-3">
            <Link to="/mysql" className="py-3 text-center text-xl font-bold">
              Mysql
            </Link>
            <div>
              <Link to="/mysql/tables">Table</Link>
            </div>
          </div>
          <div className="m-3">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}
