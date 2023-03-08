import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
  document.getElementById("root")
);
