import { BrowserRouter, Routes, Route } from "react-router-dom";

import router from "./routes/AppRoutes";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <About />
      <Coaches />
      <Timetable />
      <HighlightImage />
      <GymPasses />
      <Reviews />
      <Blogs />
      <TrialVisit />
      <Footer />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/shop" element={<Shop />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
