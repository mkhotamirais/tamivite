import { Link } from "react-router-dom";
import { User } from "./useJp";

export function JpUserCardItems({ item }: { item: User }) {
  return (
    <Link to={`${item?.id}`} className="border p-2 rounded-lg hover:scale-105 transition-all duration-150">
      <div>{item?.username}</div>
      <div>{item?.email}</div>
    </Link>
  );
}

export function JpUserTableItems({ item, i }: { item: User; i: number }) {
  return (
    <tr className="*:border-b *:p-2">
      <td>{i + 1}</td>
      <td>{item?.username}</td>
      <td className="hidden sm:table-cell">{item?.email}</td>
      <td>
        <Link to={`${item?.id}`} className="underline">
          detail
        </Link>
      </td>
    </tr>
  );
}
