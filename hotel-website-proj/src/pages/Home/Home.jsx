import Header from "../../components/Header/Header";
import BookNow from "../../components/BookNow/BookNow";
import "../../index.module.scss";
import HomeStyle from "./Home.module.scss";
import PageContent from "../Home/HomePageContent/PageContent";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <div className={HomeStyle.wrapper}>
    <div className={HomeStyle.background}>
      <Header />
      <BookNow />
    </div>
    <PageContent />
    <Testimonials />
    <Footer />
  </div>
);
export default Home;
