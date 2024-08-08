import { Container } from "@/components/wrapper";
import { Outlet } from "react-router-dom";

export default function MongoLayout() {
  return (
    <div className="bg-gray-50">
      <Container>
        MongoLayout
        <div className="p-3">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
