import Header from "../../components/Header/Header";

import BookNow from "../../components/BookNow/BookNow";
import Footer from "../../components/Footer/Footer";
import RoomsStyle from "./Rooms.module.scss";
import Testimonials from "../Home/components/Testimonials/Testimonials";
import PageContent from "./components/RoomsPageContent/PageContent";

const Rooms = () => (
  <div className={RoomsStyle.wrapper}>
    <div className={RoomsStyle.background}>
      <Header />
      <BookNow />
    </div>
    <PageContent />
    <Testimonials />
    <Footer />
  </div>
);

export default Rooms;
