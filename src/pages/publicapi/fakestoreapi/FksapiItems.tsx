import { InitialProduct } from "@/redux/features/fksapiSlice";
import { Link } from "react-router-dom";

export default function FksapiItems({ item }: { item: InitialProduct }) {
  return (
    <div className="border rounded shadow">
      <Link to={`detail/${item?.id}`}>
        <figure className="h-56">
          <img
            src={item?.image}
            alt={item?.title || "no image"}
            className="scale-90 w-full h-full object-cover hover:scale-95 hover:object-contain transition-all duration-500"
          />
        </figure>
      </Link>
      <div className="p-2 text-sm flex flex-col">
        <div>{item?.title?.substring(0, 30)}..</div>
        <div className="text-lg">${item?.price}</div>
        <Link to={`detail/${item?.id}`} className="underline hover:text-cyan-500">
          detail
        </Link>
      </div>
    </div>
  );
}
