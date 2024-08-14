import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import router from "./routes/AppRoutes";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/shop" element={<Shop />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
  return <RouterProvider router={router} />;
}

export default App;
