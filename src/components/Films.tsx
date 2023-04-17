import Logo from "./Logo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { url_characters } from "../context/context";

const Films = () => {
  const { character } = useParams();
  const { isLoading, fetchFilms, newFilms } = useGlobalContext();
  useEffect(() => {
    fetchFilms(`${url_characters}?search=${character}`);
  }, []);
  return (
    <>
      <section className="container-character">
        <Logo />
        <h1>{character}</h1>
        {isLoading && <div className="loading"></div>}
        {newFilms.length > 0 ? (
          <div className="list">
            {newFilms[0].films.map((film) => {
              return (
                <article key={film.episode_id} className="list-item">
                  <small>Title:</small>
                  <h3 className="film-title">{film.title}</h3>
                  <div className="box">
                    <small>Release day:</small>
                    <h3> {film.release_date}</h3>
                  </div>
                  <p>{film.opening_crawl.substring(0, 130)}...</p>
                </article>
              );
            })}
          </div>
        ) : (
          <h2>NO DATA TO SHOW OR IT IS COMING..</h2>
        )}
      </section>
    </>
  );
};

export default Films;
