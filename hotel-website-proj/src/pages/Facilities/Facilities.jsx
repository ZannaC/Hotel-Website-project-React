import Header from "../../components/Header/Header";
import BookNow from "../../components/BookNow/BookNow";
import FacilitiesStyle from "./Facilities.module.scss";
import PageContent from "./FacilitiesPageContent/PageContent";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Facilities = () => (
  <div className={FacilitiesStyle.wrapper}>
    <div className={FacilitiesStyle.background}>
      <Header />
      <BookNow />
    </div>
    <PageContent />
    <Testimonials />
    <Footer />
  </div>
);

export default Facilities;
