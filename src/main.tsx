import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index";
import Root from "./routes/root";
import ErrorPage from "./error-page";

import Films from "./pages/Films";
import Stars from "./pages/Stars";
import Genres from "./pages/Genres";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "genres/",
        element: <Genres />,
      },
      {
        path: "stars/",
        element: <Stars />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
