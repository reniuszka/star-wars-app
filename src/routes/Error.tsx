import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function MyErrorElement() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <section className="error-page">
          <Logo />
          <h1>Oops!</h1>
          <Link to="/">
            <h3>Go back to the main page</h3>
          </Link>

          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            {error.status} {error.statusText}
          </p>
        </section>

        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>"Unknown Error"</p>
      {/* <Footer /> */}
    </>
  );
}
