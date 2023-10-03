import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => {
    return state.cart;
  });

  return (
    <div className="cart-area">
      {list.length > 0 ? (
        list.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <div className="cart-empty">
          <p>장바구니가 비었습니다.</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로 가기
          </button>
        </div>
      )}
    </div>
  );
};
export default CartList;
