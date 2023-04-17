import { Link } from "react-router-dom";
import starWarsLogo from "../assets/icons8-star-wars-100.svg";

const Logo = () => {
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
      </nav>
    </div>
  );
};

export default Logo;
