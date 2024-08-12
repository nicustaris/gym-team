import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/gym-team",
    element: <Home />,
  },
  {
    path: "/gym-team/shop",
    element: <Shop />,
  },
]);

export default router;
