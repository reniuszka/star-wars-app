import { useGlobalContext } from "../context/context";
import ListItem from "./ListItem";

const List = () => {
  const { isLoading, newResults } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (newResults.length === 0) {
    return (
      <>
        <h2>NO DATA TO SHOW OR IT IS COMING..</h2>
      </>
    );
  }
  return (
    <>
      <section className="list-container">
        <ul className="list">
          {newResults.map((character) => {
            return <ListItem key={character.person} {...character} />;
          })}
        </ul>
      </section>
    </>
  );
};


export default List;
