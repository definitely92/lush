import { Link } from "react-router-dom";
import useWindowScrollEvent from "../hooks/useWindowScroll";

const MainCampaign = () => {
  const scrollPosition = useWindowScrollEvent();
  return (
    <article
      className={`campaign scroll-animation-containerY ${
        scrollPosition > 2200 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <Link to="" className="campaign-box">
          <img
            src="/images/main_campaign_img.jpeg"
            className="campaign-image"
            alt="러쉬의 최근 이야기 보러 가기"
          />
          <div className="txt-area">
            <h3>러쉬의 최근 이야기 보러 가기</h3>
            <p className="subTitle">장난스러운 파티를 즐길 준비 되셨나요?</p>
          </div>
        </Link>
      </div>
    </article>
  );
};
export default MainCampaign;
