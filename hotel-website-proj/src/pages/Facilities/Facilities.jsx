import Header from "../../components/Header/Header";
import BookNow from "../../components/BookNow/BookNow";
import FacilitiesStyle from "./Facilities.module.scss";
import PageContent from "../Facilities/components/PageContent/PageContent";
import Testimonials from "../Home/components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Facilities = () => (
  <div className={FacilitiesStyle.wrapper}>
    <div className={FacilitiesStyle.background}>
      <Header />
      <BookNow />
      <PageContent />
      <Testimonials />
      <Footer />
    </div>
  </div>
);

export default Facilities;
