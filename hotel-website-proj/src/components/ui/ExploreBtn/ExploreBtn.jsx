import ExploreBtnStyle from "../../../components/ui/ExploreBtn/ExploreBtn.module.scss";

const ExploreBtn = ({ btnText }) => (
  <button type="button" className={ExploreBtnStyle.exploreBtn}>
    {btnText}
  </button>
);
export default ExploreBtn;
