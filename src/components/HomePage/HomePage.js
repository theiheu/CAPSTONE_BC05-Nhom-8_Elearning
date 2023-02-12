import "./homePage.css";
import SlideHome from "./SlideHome/SlideHome";
import InfoCoureBox from "./InfoCoureBox/InfoCoureBox";
import CoursesHome from "./CoursesHome/CoursesHome";
import BoxNumberContainer from "./BoxNumberContainer/BoxNumberContainer";
import InstrutorContainer from "./InstrutorContainer/InstrutorContainer";
import Review from "./Review/Review";

const HomePage = () => {
  return (
    <div className={"homePage"}>
      <SlideHome />
      <InfoCoureBox />
      <CoursesHome />
      <BoxNumberContainer />
      <InstrutorContainer />
      <Review />
    </div>
  );
};

export default HomePage;
