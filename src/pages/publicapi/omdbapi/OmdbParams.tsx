import { useOmdb } from "./useOmdb";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface SelectProps {
  id: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

// export const OmdbReset = () => {
//     const dispatch = useDispatch();
//     return (
//       <button onClick={() => dispatch(reset())} className="bg-cyan-500 text-white hover:opacity-70 rounded p-1 px-2">
//         reset
//       </button>
//     );
//   };

export const OmdbSearch = () => {
  const { setS, setParams } = useOmdb();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setS(search);
    setParams({ s: search });
  };
  return (
    <form onSubmit={handleSearch} className="flex gap-1 w-full sm:w-48 lg:w-72">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 bg-inherit border rounded-lg w-full text-white"
        placeholder="Search here..."
      />
      <button
        type="submit"
        title="search"
        className="border w-14 text-white rounded-lg flex items-center justify-center hover:opacity-50"
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export const OmdbType = () => {
  const { type, setType, setParams } = useOmdb();

  useEffect(() => {
    setParams({ type });
  }, [setParams, type]);

  return (
    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
      <option value="">type</option>
      <option value="movie">movie</option>
      <option value="series">series</option>
      <option value="episode">episode</option>
    </Select>
  );
};

export const OmdbY = () => {
  const { y, setY, setParams } = useOmdb();

  useEffect(() => {
    setParams({ y });
  }, [setParams, y]);

  const tahun = [];
  const tahunIni = new Date().getFullYear();
  for (let i = tahunIni; i >= 1990; i--) {
    tahun.push(i);
  }
  return (
    <Select id="y" value={y} onChange={(e) => setY(e.target.value)}>
      <option value="">year</option>
      {tahun.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export const OmdbPlot = () => {
  const { plot, setPlot, setParams } = useOmdb();

  useEffect(() => {
    setParams({ plot });
  }, [setParams, plot]);

  return (
    <Select id="plot" value={plot} onChange={(e) => setPlot(e.target.value)}>
      <option value="">plot</option>
      <option value="short">short</option>
      <option value="full">full</option>
    </Select>
  );
};

const Select = ({ id, value, onChange, children }: SelectProps) => {
  return (
    <div>
      <select
        title="select me"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`border rounded-lg p-2 bg-slate-700 text-white`}
      >
        {children}
      </select>
    </div>
  );
};
