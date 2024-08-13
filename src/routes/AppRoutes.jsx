import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const routes = [
  {
    path: "/test",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? "/" : "/gym-team/",
});

export default router;
