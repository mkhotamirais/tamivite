import { create } from "zustand";

const omdbUrl = `https://www.omdbapi.com/?apikey=99773434`;

export interface OmdbParams {
  s?: string;
  type?: string;
  y?: string;
  plot?: string;
}

export interface OmdbMovies {
  imdbID: string;
  Poster: string;
  Type: string;
  Title: string;
  Year: string;
}

export interface OmdbSingleMovies extends OmdbMovies {
  Actors: string;
  Year: string;
  Country: string;
  Genre: string;
  Released: string;
  Runtime: string;
  imdbRating: string;
  Writer: string;
  Plot: string;
}

export interface OmdbState extends OmdbParams {
  movies: OmdbMovies[] | null;
  singleMovie: OmdbSingleMovies | null;
  loadMoviesPage: boolean;
  loadSingleMovie: boolean;
  errMoviesPage: boolean;
  setS: (s: string) => void;
  setType: (type: string) => void;
  setY: (y: string) => void;
  setPlot: (plot: string) => void;
  params: { s: string };
  setParams: (data: OmdbParams) => void;
  getMovies: (pramObj: OmdbParams) => void;
  getMovieByimdbID: (imdbId: string) => void;
}

export const useOmdb = create<OmdbState>((set) => ({
  movies: null,
  singleMovie: null,
  loadMoviesPage: false,
  loadSingleMovie: false,
  errMoviesPage: false,
  s: "",
  type: "",
  y: "",
  plot: "",
  setS: (s) => set({ s }),
  setType: (type) => set({ type }),
  setY: (y) => set({ y }),
  setPlot: (plot) => set({ plot }),
  params: { s: "spongebob" },
  setParams: (data) => set((state) => ({ params: { ...state.params, ...data } })),
  getMovies: async (paramObj) => {
    set({ loadMoviesPage: true });
    let param: OmdbParams = { s: "spongebob" };
    param = { ...paramObj };
    if (param.s === null || param.s === "") param.s = "spongebob";
    const paramString = Object.entries(param)
      .map((item) => item.join("="))
      .join("&");

    const response = await fetch(`${omdbUrl}&${paramString}`);
    const result = await response.json();
    if (result.Response === "True") {
      set({ movies: result.Search, loadMoviesPage: false });
    } else {
      set({ movies: null, loadMoviesPage: false });
    }
  },
  getMovieByimdbID: async (imdbID) => {
    set({ loadSingleMovie: true });
    const response = await fetch(`${omdbUrl}&i=${imdbID}`);
    const result = await response.json();
    if (result.Response === "True") {
      set({ singleMovie: result, loadSingleMovie: false });
    }
  },
}));
