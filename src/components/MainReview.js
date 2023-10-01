import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainReviewInfo } from "../libs/mainReview";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import useWindowScrollEvent from "../hooks/useWindowScroll";

const MainReview = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const scrollPosition = useWindowScrollEvent();

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 1028 ? 2.2 : 4;
      setSlidesPerView(newSlidesPerView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <article
      className={`review scroll-animation-containerY ${
        scrollPosition > 200 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={8}
          modules={[Pagination]}
          pagination={{
            type: "progressbar",
          }}
        >
          {MainReviewInfo.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="stars">
                <img src={review.stars} alt="별5개" />
              </div>
              <p className="title">{review.title}</p>
              <div className="buttons">
                <button type="button">
                  <img src={review.btn1} alt="좋아요 버튼" />
                </button>
                <button type="button">
                  <img src={review.btn2} alt="장바구니 버튼" />
                </button>
              </div>
              <Link to="">
                <img
                  src={review.img}
                  className="review-image"
                  alt="리뷰 이미지"
                />
                <p className="review-text">{review.txt}</p>
              </Link>
              <div className="user">
                <img src={review.userImg} alt="user_img" />
                <span>{review.userName}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};

export default MainReview;
