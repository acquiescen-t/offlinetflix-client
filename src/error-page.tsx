import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  var errorMessage = "Sorry, an unexpected error has occurred: ".concat(
    error.statusText || error.message
  );

  return (
    <div className="error-page text-center" id="error-page">
      <div>
        {errorMessage}
        <br />
        <Link to="http://localhost:5173/">Return to Home</Link>
      </div>
    </div>
  );
}
