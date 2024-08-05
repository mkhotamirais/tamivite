import { useEffect } from "react";
import { OmdbPlot, OmdbSearch, OmdbType, OmdbY } from "./OmdbParams";
import { useOmdb } from "./useOmdb";
import { LoaderPulse } from "@/components/loader-pulse";
import OmdbItems from "./OmdbItems";

export default function Omdb() {
  const { params, movies, getMovies, loadMoviesPage, errMoviesPage } = useOmdb();
  useEffect(() => {
    getMovies(params);
  }, [getMovies, params]);

  let content;
  if (loadMoviesPage) content = <LoaderPulse />;
  else if (errMoviesPage) content = <div>error</div>;
  else {
    if (movies && movies?.length > 0) {
      const renderMovies = movies && movies?.map((item) => <OmdbItems key={item?.imdbID} item={item} />);

      content = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
          {renderMovies}
        </div>
      );
    } else content = <div className="text-white text-center mt-12 text-lg italic">no result</div>;
  }

  return (
    <section className="bg-gray-700 relative min-h-screen w-full">
      <div className="sticky top-0 z-20 py-[0.1rem] px-2 lg:px-16 bg-gradient-to-t from-slate-600 to-slate-800">
        <OmdbLogo className={"block sm:hidden"} />
        <div className="flex justify-between my-3 w-full">
          <OmdbLogo className={"hidden sm:block"} />
          <div className="flex gap-3 w-full sm:w-auto">
            <OmdbNotSearch className="hidden sm:flex" />
            <OmdbSearch />
          </div>
        </div>
        <OmdbNotSearch className="flex sm:hidden w-full mb-3" />
      </div>

      <main className="px-2 lg:px-16 py-3">{content}</main>
    </section>
  );
}

const OmdbLogo = ({ className }: { className: string }) => (
  <a href="https://www.omdbapi.com/" className={`${className} text-gray-200`}>
    <h1 className="roboto text-2xl font-medium text-center">ObdmApi</h1>
  </a>
);

const OmdbNotSearch = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex gap-1`}>
      <OmdbType />
      <OmdbY />
      <OmdbPlot />
    </div>
  );
};
