import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
