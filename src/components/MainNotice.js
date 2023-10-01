import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useWindowScrollEvent from "../hooks/useWindowScroll";
import "swiper/scss";

const NoticeList = [
  {
    id: 1,
    text: "[공지] 러쉬코리아 개인정보처리방침 변경 안내",
  },
  {
    id: 2,
    text: "[배송 공지] 추석 연휴 배송 일정 안내",
  },
];
const MainNotice = () => {
  const scrollPosition = useWindowScrollEvent();
  return (
    <article
      className={`notice_area scroll-animation-containerY ${
        scrollPosition > 2600 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <div className="in_box">
          <p className="tit">공지사항</p>
          <Swiper
            direction={"vertical"}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {NoticeList.map((notice) => (
              <SwiperSlide key={notice.id}>
                <Link>{notice.text}</Link>
                <span className="ico-new">
                  <img
                    src="https://definitely92.github.io/lush/images/ico_new.svg"
                    alt="new"
                  />
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  );
};

export default MainNotice;
