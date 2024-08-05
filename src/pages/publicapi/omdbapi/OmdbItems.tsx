import { useState } from "react";
import OmdbModalId from "./OmdbModalId";
import { motion } from "framer-motion";
import { OmdbMovies } from "./useOmdb";

export default function OmdbItems({ item }: { item: OmdbMovies }) {
  const [modalId, setModalId] = useState<string | null>(null);
  const onClose = () => {
    setModalId(null);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        onClick={() => setModalId(item?.imdbID)}
        style={{ background: `linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.5)), url(${item?.Poster})` }}
        className="z-0 relative border bg-center bg-cover rounded overflow-hidden group"
      >
        <div className="z-10 -top-full opacity-0 group-hover:top-0 group-hover:opacity-100 absolute h-12 text-sm bg-gradient-to-b from-black to-[rgba(255,255,255,0)] w-full text-white flex justify-between p-2 transition-all duration-150">
          <div>{item?.Year}</div>
          <div className="border h-min px-2 rounded-full">{item?.Type}</div>
        </div>
        <img
          src={item?.Poster}
          alt="omdb image"
          className="group-hover:object-contain group-hover:scale-95 h-72 w-full object-cover object-center transition-all duration-150"
        />
        <h2 className="font-robotoSlab text-white p-2 min-h-20 flex items-center justify-center bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(255,255,255,.1)]">
          {item?.Title}
        </h2>
      </motion.button>
      <OmdbModalId itemId={item?.imdbID} modalId={modalId} onClose={onClose} />
    </>
  );
}
