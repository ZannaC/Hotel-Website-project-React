import Header from "../../components/Header";
import BookNow from "../../components/BookNow";
import "../../index.css";
import HomeStyle from "./Home.module.scss";
// import ExploreBtn from "../../components/ui/ExploreBtn";
import ContentData from "../../pages/Home/components/PageContentData";

const Home = () => {
  return (
    <div className={HomeStyle.wrapper}>
      <div className={HomeStyle.background}>
        <Header />
        <BookNow />
        <ContentData />
      </div>
    </div>
  );
};
export default Home;
