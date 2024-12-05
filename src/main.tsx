import ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import Root from "./routes/root";
import ErrorPage from "./error-page";

import Films from "./pages/Films";
import Stars from "./pages/Stars";
import Genres from "./pages/Genres";
import GenreFilms from "./pages/GenreFilms";
import WatchFilm from "./pages/WatchFilm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Sync from "./pages/Sync";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "films/",
        element: <Films />,
      },
      {
        path: "films/:filmId",
        element: <WatchFilm />,
      },
      {
        path: "films/:filmId/sync",
        element: <Sync />,
      },
      {
        path: "genres/",
        element: <Genres />,
      },
      {
        path: "genres/:genreName",
        element: <GenreFilms />,
      },
      {
        path: "stars/",
        element: <Stars />,
      },
      {
        path: "test/",
        element: <TestPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
