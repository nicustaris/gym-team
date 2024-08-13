import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import router from "./routes/AppRoutes";
import Hero from "./components/Hero/Hero";

function App() {
  return <RouterProvider router={router} />;

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/shop" element={<Shop />} />
  //   </Routes>
  // </BrowserRouter>
}

export default App;
