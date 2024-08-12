import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
