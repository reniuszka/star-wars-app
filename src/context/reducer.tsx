import { CharacterType, FilmType } from "../types/types";
import { HomeworldType, FilmDataType } from "./context";

type ReducerActionType =
  | { type: "SET_LOADING" }
  | {
      type: "SET_CHARACTERS";
      payload: ReducerStateType;
    }
  | {
      type: "SET_CHARACTER-FILMS";
      payload: ReducerStateType;
    }
  | {
      type: "SET_HOMEWORLD";
      payload: HomeworldType[];
    }
  | {
      type: "SET_FILMS";
      payload: FilmDataType[];
    };

type ReducerStateType = {
  isLoading: boolean;
  results: CharacterType[];
  count: number;
  newResults: HomeworldType[];
  newFilms: FilmDataType[];
};

const reducer = (state: ReducerStateType, action: ReducerActionType) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, isLoading: true };
    }
    case "SET_CHARACTERS": {
      return {
        ...state,
        isLoading: false,
        results: action.payload.results,
        count: action.payload.count,
      };
    }
    case "SET_CHARACTER-FILMS": {
      return {
        ...state,
        isLoading: false,
        results: action.payload.results,
      };
    }
    case "SET_HOMEWORLD": {
      return {
        ...state,
        isLoading: false,
        newResults: action.payload,
      };
    }
    case "SET_FILMS": {
      return {
        ...state,
        isLoading: false,
        newFilms: action.payload,
      };
    }
    default: {
      throw new Error(`Something went wrong to change the state`);
    }
  }
};

export default reducer;
