import starWarsLogo from "../assets/icons8-star-wars-100.svg";
import Form from "./Form";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
const url_characters: string = "https://swapi.dev/api/people/";
const Navbar = () => {
  const { query, setQuery, fetchCharacters } = useGlobalContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
    fetchCharacters(`${url_characters}?search=${query}`);
  };

  return (
    <div className="nav-container">
      <nav>
        <div>
          <Link to="/">
            <img
              src={starWarsLogo}
              className="logo star-wars"
              alt="React logo"
            />
          </Link>
        </div>
        <Form
          onSubmit={(e) => handleSubmit(e)}
          type="text"
          name="search"
          id="search-input"
          value={query}
          onChange={handleSearch}
        />
      </nav>
    </div>
  );
};

export default Navbar;
