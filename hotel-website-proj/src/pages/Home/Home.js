import Header from "../../components/Header";
import BookNow from "../../components/BookNow";
import "../../index.css";
import HomeStyle from "./Home.module.scss";

const Home = () => {
  return (
    <div className={HomeStyle.wrapper}>
      <div className={HomeStyle.background}>
        <Header />
        <BookNow />
      </div>
    </div>
  );
};
export default Home;
