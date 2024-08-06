import { setQ, setQuery, setTop } from "@/redux/features/newsapiSlice";
import { RootNews } from "@/redux/store";
import { ChangeEvent, FormEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function NewsapiQ() {
  const { q, query } = useSelector((state: RootNews) => state.newsapi);
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let myQ;
    if (!q || q === null || q === "") {
      myQ = "jokowi";
    }
    dispatch(setQuery({ ...query, queryObj: { myQ } }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="search"
        value={q}
        onChange={(e) => dispatch(setQ(e.target.value))}
        placeholder="Search here"
        className="border rounded p-1 focus:outline-none bg-inherit w-full"
      />
      <button
        title="button news"
        type="submit"
        className="w-12 flex items-center justify-center bg-cyan-500 text-white hover:opacity-70 rounded"
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

export const NewsapiTop = () => {
  const { top, query } = useSelector((state: RootNews) => state.newsapi);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTop(e.target.value));
    dispatch(setQuery({ ...query, top: e.target.value }));
  };

  return (
    <select
      title="select news"
      name={"top"}
      id={"top"}
      value={top}
      onChange={handleChange}
      className={`p-1 border rounded`}
    >
      <option value="">top category</option>
      <option value="top-headlines">Top Headlines</option>
      <option value="everything">Everything</option>
    </select>
  );
};
