import { ReactElement } from "react";
import { Link } from "react-router-dom";

type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
type PropTypes = {
  person: string;
  films: FilmType[];
};
const FilmItem = ({ person, films }: PropTypes): ReactElement => {
  return (
    <div className="list">
      {films.map((film) => {
        return (
          <article key={film.episode_id} className="list-item">
            <small>Title:</small>
            <h3 className="film-title">{film.title}</h3>
            <div className="box">
              <small>Release day:</small>
              <h4>{film.release_date}</h4>
            </div>
            <p>{film.opening_crawl.substring(0, 130)}...</p>
          </article>
        );
      })}
    </div>
  );
};

export default FilmItem;
