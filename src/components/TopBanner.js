import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";
import "../assets/styles/header.scss";

const TopBannerTexts = [
  {
    id: 1,
    text: "스킨케어 제품 리뷰 남기고 깜짝 선물 받기!",
  },
  {
    id: 2,
    text: "연휴 맞이 더블 찬스! 앱 전용 쿠폰 받고 쇼핑하기!",
  },
  {
    id: 3,
    text: "미리 찾아온 겨울 친구들 만나러 가기!",
  },
  {
    id: 4,
    text: "취향사전 EP.9 보습이 필요한 이유!",
  },
  {
    id: 5,
    text: "스킨케어 제품 리뷰 남기고 깜짝 선물 받기!",
  },
];
const TopBanner = () => {
  return (
    <div className="top_banner">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {TopBannerTexts.map((item) => (
          <SwiperSlide key={item.id}>{item.text}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBanner;
