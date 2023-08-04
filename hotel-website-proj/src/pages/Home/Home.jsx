import Header from "../../components/Header/Header";
import BookNow from "../../components/BookNow/BookNow";
// import "../../index.module.scss";
import HomeStyle from "./Home.module.scss";
import PageContent from "../Home/components/PageContent/PageContent";
import Testimonials from "../Home/components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <div className={HomeStyle.wrapper}>
    <div className={HomeStyle.background}>
      <Header />
      <BookNow />
      <PageContent />
      <Testimonials />
      <Footer />
    </div>
  </div>
);
export default Home;
