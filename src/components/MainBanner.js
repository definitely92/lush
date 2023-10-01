import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/css/pagination";
import { MainBannerImages } from "../libs/mainBannerImages";
import "../assets/styles/main.scss";

const MainBanner = () => {
  return (
    <article className="main-banner">
      <div className="inner">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            type: "fraction",
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          {MainBannerImages.map((img) => (
            <SwiperSlide key={img.id}>
              <Link>
                <img src={img.src} alt={img.alt} />
                <div className="banner-txt">
                  <ul className="eyeblow">
                    <li>{img.eyeText1}</li>
                    <li>{img.eyeText2}</li>
                  </ul>
                  <p>
                    {img.Btext1}
                    <br />
                    {img.Btext2}
                  </p>
                  <span>{img.Stext}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};

export default MainBanner;
