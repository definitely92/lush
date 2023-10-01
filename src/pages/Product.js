import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "../assets/styles/detail.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FixedBtns from "../components/FixedBtns";

const tabMenuArr = [
  { name: "제품정보", content: "제품정보 컨텐츠" },
  { name: "제품후기", content: "제품후기 컨텐츠" },
  { name: "배송/반품/교환", content: "배송/반품/교환 컨텐츠" },
  { name: "필수정보", content: "필수정보 컨텐츠" },
];

const Product = ({ prds }) => {
  const [tab, setTab] = useState(0);

  const selectTabHandler = (index) => {
    setTab(index);
  };

  let { id } = useParams();
  const findPrd = prds.find((x) => {
    return x.id == id;
  });
  return (
    <section className="detail">
      <article className="detail-top">
        <div className="prd-img-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={true}
            autoplay={true}
          >
            {findPrd.detailImg.map((prd) => (
              <SwiperSlide key={prd.id}>
                <img src={prd.src} alt="상품상세 이미지" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
      <article className="prd-info-area">
        <div className="inner">
          <div className="prd-info-wrap">
            <h2 className="product-name">{findPrd.name}</h2>
            <p className="category body11">{findPrd.category}</p>
            <ul className="hash-box flex left top"></ul>
            <ul className="option-wrap">
              <li>
                <p className="prd-price">￦ {findPrd.price}</p>
              </li>
              <li>
                <div className="body2 go-after" id="reviewTab">
                  2798 개의 후기 보기
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="prd-detail">
        <div className="inner">
          <ul className="tab-btn">
            {tabMenuArr.map((menu, i) => (
              <li key={i} className={`${tab === i ? "on" : ""}`}>
                <Link
                  onClick={() => {
                    selectTabHandler(i);
                  }}
                >
                  {tabMenuArr[i].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-cont">
          <div className="tab-inner">{tabMenuArr[tab].content}</div>
        </div>
        <FixedBtns />
      </article>
    </section>
  );
};
export default Product;
