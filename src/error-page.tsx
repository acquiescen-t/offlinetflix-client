import { Link, useRouteError } from "react-router-dom";
import config from "./Config";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  var errorMessage = "Sorry, an unexpected error has occurred: ".concat(
    error.statusText || error.message
  );

  return (
    <div className="error-page text-center" id="error-page">
      <div>
        <p>{errorMessage}</p>
        <br />
        <Link to={config.webUrl}>Return to Home</Link>
      </div>
    </div>
  );
}
