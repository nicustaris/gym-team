import About from "../../components/About/About";
import Blogs from "../../components/Blogs/Blogs";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Coaches from "../../components/Coaches/Coaches";
import Footer from "../../components/Footer/Footer";
import GymPasses from "../../components/GymPasses/GymPasses";
import Hero from "../../components/Hero/Hero";
import HighlightImage from "../../components/HighlightImage/HighlightImage";
import Reviews from "../../components/Reviews/Reviews";
import Timetable from "../../components/Timetable/Timetable";
import TrialVisit from "../../components/TrialVisit/TrialVisit";

const Home = () => {
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
  );
};

export default Home;
