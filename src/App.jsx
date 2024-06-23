import About from "./components/About/About";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Coaches from "./components/Coaches/Coaches";
import GymPasses from "./components/GymPasses/GymPasses";
import Hero from "./components/Hero/Hero";
import HighlightImage from "./components/HighlightImage/HighlightImage";
import Timetable from "./components/Timetable/Timetable";

function App() {
  return (
    <>
      <Hero />
      <ChooseUs />
      {/* <About /> */}
      <Coaches />
      <Timetable />
      <HighlightImage />
      <GymPasses />
    </>
  );
}

export default App;
