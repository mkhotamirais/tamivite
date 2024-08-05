import { useEffect } from "react";
import { useJp } from "./useJp";
import { LoaderPulse } from "@/components/loader-pulse";
import { JpUserCardItems, JpUserTableItems } from "./JpUserItems";
import { GridCard, SetView } from "./JpUtils";
export default function JpUser() {
  const { users, getUsers, loadUserPage, errUserPage, userView, setUserView } = useJp();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  let content;
  if (loadUserPage) content = <LoaderPulse />;
  else if (errUserPage) content = <div>error user page</div>;
  else {
    const renderCard = users?.map((item) => <JpUserCardItems key={item?.id} item={item} />);
    const renderTable = users?.map((item, i: number) => <JpUserTableItems key={item?.id} i={i} item={item} />);
    if (users && users?.length > 0) {
      if (userView === "card") {
        content = (
          <>
            <SetView className={"my-2"} view={userView} setView={setUserView} />
            <div>Total result: {users?.length} data</div>
            <GridCard>{renderCard}</GridCard>;
          </>
        );
      } else if (userView === "table") {
        content = (
          <>
            <SetView className={"my-2"} view={userView} setView={setUserView} />
            <div>Total result: {users?.length} data</div>
            <table className="w-full">
              <thead className="text-left">
                <tr className="border-b-2 *:p-2">
                  <th>no</th>
                  <th>name</th>
                  <th className="hidden sm:table-cell">email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderTable}</tbody>
            </table>
          </>
        );
      }
    } else content = <div>no data</div>;
  }

  return <div className="mt-6">{content}</div>;
}
