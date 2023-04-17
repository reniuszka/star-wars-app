import React, {
  useState,
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import reducer from "./reducer";
import { CharacterType, FilmType, DataType } from "../types/types";

export type ChildrenTypes = {
  children: ReactNode;
};
export type HomeworldType = {
  person: string;
  name: string;
  population: number;
  films: string[];
};
export type FilmDataType = {
  person: string;
  films: FilmType[];
};

type InitialContextStateType = {
  isLoading: boolean;
  results: CharacterType[];
  newResults: HomeworldType[];
  newFilms: FilmDataType[];
  count: number;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchCharacters: (url: string) => void;
  fetchFilms: (url: string) => void;
};

const initialContextState: InitialContextStateType = {
  isLoading: true,
  results: [],
  count: 0,
  query: "",
  setQuery: () => {},
  fetchCharacters: () => {},
  fetchFilms: () => {},
  newResults: [],
  newFilms: [],
};

export const url_characters: string = "https://swapi.dev/api/people/";

const AppContext = createContext(initialContextState);

const AppProvider = ({ children }: ChildrenTypes) => {
  const [state, dispatch] = useReducer(reducer, initialContextState);
  const [query, setQuery] = useState<string>("");

  const fetchCharacters = useCallback(
    async (url: string): Promise<DataType> => {
      dispatch({ type: "SET_LOADING" });
      try {
        const results: Response = await fetch(url);
        const data = await results.json();
        dispatch({
          type: "SET_CHARACTERS",
          payload: {
            ...state,
            results: data.results,
            count: data.count,
          },
        });

        let getPepleDetails = data.results;
        let newData: HomeworldType[] = [];

        //homeworld call
        for (let person of getPepleDetails) {
          const resultsHomeworld: Response = await fetch(person.homeworld);
          const dataHomeworld = await resultsHomeworld.json();

          newData.push({
            person: person.name,
            name: dataHomeworld.name,
            population: dataHomeworld.population,
            films: person.films,
          });
        }

        dispatch({
          type: "SET_HOMEWORLD",
          payload: newData,
        });
        return data;
      } catch (error) {
        console.log(error);
        throw new Error("something went wrong to fetch characters");
      }
    },
    [query]
  );

  const fetchFilms = async (url: string): Promise<DataType> => {
    dispatch({ type: "SET_LOADING" });
    try {
      const results: Response = await fetch(url);
      const data = await results.json();
      dispatch({
        type: "SET_CHARACTER-FILMS",
        payload: {
          ...state,
          results: data.results,
        },
      });
      const person = data.results[0];
      const newFilmData: FilmDataType[] = [];
      //films call

      const movies: FilmType[] = [];
      if (person.films.length > 0) {
        person.films.map(async (filmURL: string) => {
          const resultsFilm: Response = await fetch(filmURL);
          const dataFilm = await resultsFilm.json();
          movies.push(dataFilm);
          newFilmData.push({
            person: person.name,
            films: movies,
          });
          dispatch({
            type: "SET_FILMS",
            payload: newFilmData,
          });
        });
      }

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("something went wrong to fetch characters");
    }
  };

  useEffect(() => {
    fetchCharacters(`${url_characters}?search=${query}`);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, setQuery, query, fetchCharacters, fetchFilms }}
    >
      {children}
    </AppContext.Provider>
  );
};

//global hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
