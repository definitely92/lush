import { useNavigate } from "react-router-dom";

const CartModal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  return (
    <div className="popup" id="op-layer-cart">
      <div className="pop-head"></div>
      <div className="pop-content">
        <p className="body1">
          제품이 장바구니에 담겼습니다.
          <br />
          바로 확인하시겠습니까?
        </p>
      </div>
      <div className="btn-wrap basic double">
        <button
          type="button"
          className="border-btn pop-close"
          onClick={() => {
            setModal(!modal);
          }}
        >
          계속 쇼핑하기
        </button>
        <button
          type="button"
          className="black-btn"
          onClick={() => {
            navigate("/cart");
          }}
        >
          확인하기
        </button>
      </div>

      <button
        type="button"
        className="pop-close popup-close-btn"
        onClick={() => {
          setModal(!modal);
        }}
      >
        <img
          src="https://definitely92.github.io/lush/images/closePop.svg"
          alt="팝업 닫기"
        />
      </button>
    </div>
  );
};
export default CartModal;
