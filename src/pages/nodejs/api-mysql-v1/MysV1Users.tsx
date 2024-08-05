import { useEffect } from "react";
import MysV1UsersList from "./MysV1UsersList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useMysV1Users } from "./useMysV1";

export default function MysV1Users() {
  const { users, setUsers, errorPage, loadPage } = useMysV1Users();

  useEffect(() => {
    setUsers();
  }, [setUsers]);

  if (errorPage) return <div>{errorPage}</div>;
  if (loadPage) return <div>loading...</div>;

  return (
    <>
      <Button asChild size="sm" className="my-2">
        <Link to="/api-mysql-v1/add">Add user</Link>
      </Button>
      {users.length === 0 ? (
        <div>No users</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
          {users?.map((item) => (
            <MysV1UsersList key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
