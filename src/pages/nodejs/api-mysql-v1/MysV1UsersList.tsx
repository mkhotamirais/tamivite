import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import MysV1UsersDelDialog from "./MysV1UsersDelDialog";
import { MysV1UsersValues } from "./useMysV1";

export default function MysV1UsersList({ item }: { item: MysV1UsersValues }) {
  return (
    <div className="group relative border p-2 rounded-lg flex flex-col items-center">
      <div className="text-xl font-medium mb-2">{item.name}</div>
      <div>{item.email}</div>
      <div>{item.gender}</div>
      <div className="z-10 hidden group-hover:flex absolute top-0 right-0 bg-white/50">
        <Link to={`/api-mysql-v1/edit/${item.id}`}>
          <Button size="icon" variant="ghost">
            <Edit className="size-4 text-green-500" />
          </Button>
        </Link>
        <MysV1UsersDelDialog id={item.id} />
      </div>
    </div>
  );
}
