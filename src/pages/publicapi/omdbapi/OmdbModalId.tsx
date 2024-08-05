import { useEffect } from "react";
import { PiSpinner } from "react-icons/pi";
import { FaXmark } from "react-icons/fa6";
import { useOmdb } from "./useOmdb";

interface OmdbModalIdProps {
  itemId: string;
  modalId: string | null;
  onClose: () => void;
}
export default function OmdbModalId({ itemId, modalId, onClose }: OmdbModalIdProps) {
  const { singleMovie: movie, loadSingleMovie, getMovieByimdbID } = useOmdb();

  useEffect(() => {
    if (modalId) {
      getMovieByimdbID(modalId);
    }
  }, [getMovieByimdbID, modalId]);

  let content;
  if (loadSingleMovie)
    content = (
      <div className="flex justify-center items-center h-full text-2xl bg-black bg-opacity-50">
        <PiSpinner className="animate-spin" />
      </div>
    );
  else
    content = (
      <>
        <h2 className="font-roboto text-2xl mb-2 mr-12">{movie?.Title}</h2>
        <div className="font-robotoSlab">
          <img
            src={movie?.Poster}
            alt="image poster"
            className="w-1/2 float-right h-[50vh] md:h-[63vh] rounded-xl object-cover ml-3 mb-3 "
          />
          <div className="text-sm lg:text-base">
            <div className="mb-2">
              <span className="font-medium">Actors: </span>
              <span>{movie?.Actors}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Year: </span>
              <span>{movie?.Year}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Country: </span>
              <span>{movie?.Country}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Genre: </span>
              <span>{movie?.Genre}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Released: </span>
              <span>{movie?.Released}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Runtime: </span>
              <span>{movie?.Runtime}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Type: </span>
              <span>{movie?.Type}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">imdbRating: </span>
              <span>{movie?.imdbRating}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Writer: </span>
              <span>{movie?.Writer}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Plot: </span>
              <span>{movie?.Plot}</span>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div
      onClick={onClose}
      className={`${
        modalId === itemId ? "z-50 opacity-100" : "-z-10 opacity-0"
      } fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center transition-all duration-150`}
    >
      <div
        style={{ background: `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.6)), url(${movie?.Poster}) center/cover` }}
        onClick={(e) => e.stopPropagation()}
        className={`${
          modalId === itemId ? "scale-100" : "scale-0"
        } relative bg-gradient-to-t from-red-500 to-blue-500 text-white p-3 w-[90vw] sm:w-2/3 h-[80vh] overflow-y-scroll transition-all duration-150 rounded-2xl`}
      >
        <button title="button close" onClick={onClose} className="fixed right-4 top-4 text-lg hover:text-gray-400">
          <FaXmark />
        </button>
        {content}
      </div>
    </div>
  );
}
