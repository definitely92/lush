import { Link, useNavigate } from "react-router-dom";
import { mainPrds } from "../libs/mainPrds";
import useWindowScrollEvent from "../hooks/useWindowScroll";

const Recommend = () => {
  const scrollPosition = useWindowScrollEvent();
  const navigate = useNavigate();

  return (
    <article
      className={`recommend scroll-animation-containerY ${
        scrollPosition > 1100 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <div className="rec-prd">
          <h3>
            <Link>
              <span
                style={{
                  background:
                    "url(/images/arrow_forward_black.svg) bottom 4px right 3px no-repeat",
                  backgroundSize: "13px",
                }}
              >
                BEST
              </span>
            </Link>
          </h3>
          <p className="subTitle">지금 가장 사랑 받고 있는 향기 보러 가기!</p>
          <div className="recommend-wrap">
            <ul>
              {mainPrds.map((prd, i) => (
                <li
                  key={mainPrds[i].id}
                  onClick={() => {
                    navigate(`/detail/${mainPrds[i].id}`);
                  }}
                >
                  <div className="img-area">
                    <img src={prd.img} alt={prd.name} />
                  </div>
                  <div className="prd-info">
                    <p className="prd-name">{prd.name}</p>
                    <p className="prd-price">₩{prd.price}</p>
                  </div>
                  <div className="buttons">
                    <button type="button" className="like">
                      <img src="/images/favourites_01.svg" alt="좋아요" />
                    </button>
                    <button type="button">
                      <img src="/images/bag2.svg" alt="장바구니 버튼" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Recommend;
