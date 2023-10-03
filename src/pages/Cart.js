import CartList from "../components/CartList";
import CartPrice from "../components/CartPrice";
import "../assets/styles/cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <section className="cart">
      <div className="sub-tit">
        <div>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="history-back"
          >
            <img src="/lush/images/ico_back.svg" alt="이전" />
          </button>
        </div>
        <p className="tit">장바구니</p>
      </div>
      <article className="cart-wrap">
        <div className="tab-cont">
          <div className="tab-inner">
            <div className="delivery-time">
              <span
                style={{
                  background:
                    "url(/lush/images/ico_basket_clock.svg) left center no-repeat",
                }}
              >
                다음날 13:00 까지 주문하면
              </span>
              <strong className="point">당일 출고</strong>
            </div>
            <CartList />
            <div className="inner">
              <CartPrice />
              <div className="notice-wrap">
                <p className="body2">
                  · 제품은 30일간 보관됩니다. 계속 보관은 찜하기로 등록하세요.
                </p>
                <p className="body2">
                  · 장바구니 제품이 품절되면 자동으로 목록에서 삭제됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Cart;
