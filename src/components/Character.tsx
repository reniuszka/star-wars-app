import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "./Logo";
import { useGlobalContext } from "../context/context";
import FilmItem from "./FilmItem";
const Character = () => {
  const { isLoading, newFilms, fetchFilms } = useGlobalContext();
  const { character } = useParams();
  console.log("character", character);
  const url_characters: string = "https://swapi.dev/api/people/";

  useEffect(() => {
    fetchFilms(`${url_characters}?search=${character}`);
  }, []);

  if (isLoading) {
    return (
      <section className="container-character">
        <Logo />
        <h1>{character}</h1>
        <small> please wait a bit longer to get details</small>
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="container-character">
      <Logo />
      <h1>{character}</h1>

      {!!newFilms ? (
        newFilms.map((film) => {
          return (
            <>
              <h2>List of movies of {film.person}</h2>
              <div key={film.person} className="list">
                <>
                  {film.films.map((film) => {
                    return (
                      <article key={film.episode_id} className="list-item">
                        <small>Title:</small>
                        <h3 className="film-title">{film.title}</h3>
                        <div>
                          <small>Release day:</small>
                          <h4>{film.release_date}</h4>
                        </div>
                        <p>{film.opening_crawl.substring(0, 130)}...</p>
                      </article>
                    );
                  })}
                </>
              </div>
            </>
          );
        })
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};

export default Character;
