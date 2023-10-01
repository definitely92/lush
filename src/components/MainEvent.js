import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useWindowScrollEvent from "../hooks/useWindowScroll";
import "swiper/css/pagination";

const EventItems = () => {
  return (
    <div className="grid-item">
      <div className="event-img-wrap">
        <img
          src="https://definitely92.github.io/lush/images/main_event_img1.png"
          alt="연휴 맞이 더블 찬스"
        />
      </div>
      <div className="event-box">
        <p className="subTitle">연휴 맞이 더블 찬스</p>
        <p className="date">2023-09-27 ~ 2023-10-03</p>
      </div>
    </div>
  );
};
const MainEvent = () => {
  const scrollPosition = useWindowScrollEvent();

  return (
    <article
      className={`event scroll-animation-containerY ${
        scrollPosition > 2000 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <h3>
          <Link>
            <span>지금 놓치면 안될 이벤트</span>
          </Link>
        </h3>
        <p className="subTitle">진행중인 이벤트를 확인하세요.</p>
        <Swiper modules={[Pagination]} pagination={true}>
          <SwiperSlide>
            <EventItems />
            <EventItems />
            <EventItems />
          </SwiperSlide>
          <SwiperSlide>
            <EventItems />
            <EventItems />
            <EventItems />
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  );
};

export default MainEvent;
