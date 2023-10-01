import { Link } from "react-router-dom";
import "../assets/styles/main.scss";
import useWindowScrollEvent from "../hooks/useWindowScroll";

const AdBanner = () => {
  const scrollPosition = useWindowScrollEvent();

  return (
    <article
      className={`ad-banner ${
        scrollPosition > 700 ? "scroll-animation-bounce" : ""
      }`}
    >
      <Link to="/">
        <img src="/images/bn_ad_07.jpeg" alt="광고배너" />
      </Link>
    </article>
  );
};

export default AdBanner;
