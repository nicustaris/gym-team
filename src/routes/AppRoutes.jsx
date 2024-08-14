import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import NotFound from "./../pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
