import { insertItem } from "../store/cartslice";
import { useDispatch } from "react-redux";

const FixedBtns = ({ findPrd, setModal }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed-btn">
      <div className="prd-info-buttons">
        <div className="pay-tooltip">
          이제 <strong>모든 제품을 선물</strong>할 수 있어요!
          <button type="button" className="btn-clo-tooltip">
            <img
              src="https://definitely92.github.io/lush/images/ico_clo_tooltip.svg"
              alt="닫기"
            />
          </button>
        </div>
        <button
          type="button"
          className="btn-gift btn-l"
          style={{
            background:
              "url(https://definitely92.github.io/lush/images/gift.gif) center center no-repeat",
            backgroundSize: "27px",
          }}
        >
          선물하기
        </button>
        <button type="button" className="btn-n-pay">
          <span
            style={{
              background:
                "url(https://definitely92.github.io/lush/images/ico_naver2.svg) left center no-repeat",
            }}
          >
            Pay
          </span>
        </button>
        <button
          type="button"
          className="green-btn"
          onClick={() => {
            setModal(true);
            dispatch(
              insertItem({
                id: findPrd.id,
                price: findPrd.price,
                thumbnail: findPrd.img,
                title: findPrd.name,
                checked: true,
                category: findPrd.category,
                count: findPrd.count,
              })
            );
          }}
        >
          장바구니
        </button>
      </div>
    </div>
  );
};
export default FixedBtns;
