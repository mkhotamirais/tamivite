import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Prev } from "./JpUtils";
import { LoaderPulse } from "@/components/loader-pulse";
import { useJp } from "./useJp";

export default function JpUserSingle() {
  const { id } = useParams();
  const { singleUser, getUserById, loadUserPage, errUserPage } = useJp();

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
  }, [getUserById, id]);

  let content;
  if (loadUserPage) content = <LoaderPulse />;
  else if (errUserPage) content = <div>error user page</div>;
  else
    content = singleUser && (
      <div className="relative border rounded p-4 md:px-24 mt-3">
        <h2 className="font-cinzel text-2xl mb-4 flex gap-2 items-center">
          <Prev className={"text-lg"} /> Detail <i>{singleUser?.username}</i>
        </h2>
        <div className="mb-2">
          <div>ID: </div>
          <div className="text-lg">{singleUser?.id}</div>
        </div>
        <div className="mb-2">
          <div>Name: </div>
          <div className="text-lg">{singleUser?.name}</div>
        </div>
        <div className="mb-2">
          <div>Username: </div>
          <div className="text-lg">{singleUser?.username}</div>
        </div>
        <div className="mb-2">
          <div>Email: </div>
          <div className="text-lg">{singleUser?.email}</div>
        </div>
        <div className="mb-2">
          <div>Website: </div>
          <div className="text-lg underline">{singleUser?.website}</div>
        </div>
        <div className="mb-2">
          <div>Address: </div>
          <div className="text-lg">
            {singleUser?.address?.street}, {singleUser?.address?.suite}, {singleUser?.address?.city},{" "}
            {singleUser?.address?.zipcode}
          </div>
        </div>
        <div className="mb-2">
          <div>Company: </div>
          <div className="text-lg">
            {singleUser?.company?.name}, {singleUser?.company?.catchPhrase}, {singleUser?.company?.bs}
          </div>
        </div>
      </div>
    );

  return content;
}
