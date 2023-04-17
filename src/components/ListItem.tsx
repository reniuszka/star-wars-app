import { Link } from "react-router-dom";

type PropTypes = {
  person: string;
  name: string;
  population: number;
};

const ListItem = ({ person, name, population }: PropTypes) => {
  return (
    <li className="list-item">
      <h2>{person.toUpperCase()}</h2>
      <div className="box">
        <small>Homeworld:</small>
        <h3>{name}</h3>
        <small>Population:</small>
        <h4>{population}</h4>
      </div>
      <Link to={`/character/${person}`}>
        <button className="read-more">Read more</button>
      </Link>
    </li>
  );
};

export default ListItem;
