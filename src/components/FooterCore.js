import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";

const coreImgs = [
  {
    id: 1,
    src: "/images/naked.svg",
    txt: "naked products",
  },
  {
    id: 2,
    src: "/images/handmade.svg",
    txt: "handemade width love",
  },
  {
    id: 3,
    src: "/images/fat.svg",
    txt: "fat",
  },
  {
    id: 4,
    src: "/images/fat.svg",
    txt: "fat",
  },
  {
    id: 5,
    src: "/images/fat.svg",
    txt: "fat",
  },
];

const FooterCore = () => {
  return (
    <div className="core">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        }}
        speed={8000}
        slidesPerView={4.5}
      >
        {coreImgs.map((core) => (
          <SwiperSlide key={core.id}>
            <Link to="/">
              <img src={core.src} alt={core.txt} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default FooterCore;
