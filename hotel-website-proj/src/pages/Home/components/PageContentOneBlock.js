import ExploreBtn from "../../../components/ui/ExploreBtn";
import ContentOneBlockStyle from "./PageContentOneBlock.module.scss";

function PageContentOneBlock(props) {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className={ContentOneBlockStyle.container}>
      <div className={ContentOneBlockStyle.block}>
        <div className={ContentOneBlockStyle.blockInfo}>
          <h2>{props.theme}</h2>
          <p>{props.info}</p>
          <form action="https://www.w3schools.com" target="blank">
            <ExploreBtn />
          </form>
        </div>
        <div
          className={ContentOneBlockStyle.blockImage}
          style={backgroundImageStyle}
        ></div>
      </div>
    </div>
  );
}
export default PageContentOneBlock;
