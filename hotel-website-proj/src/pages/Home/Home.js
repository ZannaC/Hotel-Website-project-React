import Header from "../../components/Header";
import BookNow from "../../components/BookNow";
import "../../index.css";
import HomeStyle from "./Home.module.scss";
// import ExploreBtn from "../../components/ui/ExploreBtn";
import PageContent from "./components/PageContent";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div className={HomeStyle.wrapper}>
      <div className={HomeStyle.background}>
        <Header />
        <BookNow />
        <PageContent />
        <Testimonials />
      </div>
    </div>
  );
};
export default Home;
