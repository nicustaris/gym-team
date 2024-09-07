import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import NotFound from "./../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import Layout from "../components/Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
