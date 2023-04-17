import { useGlobalContext } from "../context/context";
import ListItem from "./ListItem";

const List = () => {
  const { isLoading, newResults } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <section className="list-container">
          {/* <Pagination /> */}
          <ul className="list">
            {newResults.map((character) => {
              return <ListItem key={character.person} {...character} />;
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default List;
