import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useWindowScrollEvent from "../hooks/useWindowScroll";
import "swiper/css/pagination";

const perfumeList = [
  {
    id: 1,
    img: "/images/main_perfume_img1.jpeg",
    title: "미리 메리 크리스마스!",
    subtit: "다채로운 매력을 뽐내는 귀여운 겨울 친구들을\n미리 만나보세요!",
  },
  {
    id: 2,
    img: "/images/main_perfume_img2.jpeg",
    title: "장난꾸러기 로드 오브 미스룰을 만나보세요!",
    subtit:
      "기분전환이 필요할 땐,\n달콤하고 알싸한 로드 오브 미스룰을 찾아주세요!",
  },
  {
    id: 3,
    img: "/images/main_perfume_img3.jpeg",
    title: "바비와 함께 떠나는 핑크빛 세상!",
    subtit:
      "무엇이든 할 수 있는 자신감을 \n 불어넣어줄 바비 에디션을 만나보세요!",
  },
  {
    id: 4,
    img: "/images/main_perfume_img4.jpeg",
    title: "하루를 화사하게 밝혀주는 향기",
    subtit: "특별한 향기를 담은 캔들로 \n긍정적인 에너지를 가득 채워보세요",
  },
  {
    id: 5,
    img: "/images/main_perfume_img5.png",
    title: "모험 냄새가 나는 걸!",
    subtit:
      "루피와 그의 해적단과 함께 마술로 가득한 욕조 깊은 곳으로 떠나보세요",
  },
];

const MainPerfume = () => {
  const scrollPosition = useWindowScrollEvent();

  return (
    <article
      className={`perfume scroll-animation-containerY ${
        scrollPosition > 1500 ? "animate" : ""
      }`}
    >
      <div className="inner wide">
        <Swiper pagination={true} slidesPerView={1} modules={[Pagination]}>
          {perfumeList.map((item) => (
            <SwiperSlide key={item.id}>
              <Link>
                <img src={item.img} alt={item.title} />
                <div className="spa-txt">
                  <h3>{item.title}</h3>
                  <p className="subTitle">{item.subtit}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
};

export default MainPerfume;
