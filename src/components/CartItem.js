import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCount, decreaseCount, deleteItem } from "../store/cartslice";

const CartItem = ({ item }) => {
  const formatPrice = (target) => {
    let result = parseInt(target.replace(/,/g, ""));

    return result;
  };
  const totalPrice = (target) => {
    const total = target.toLocaleString("ko-KR");
    return total;
  };
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <ul className="cart-top-btn flex">
        <li>
          <input
            type="checkbox"
            id="checkbox2"
            name="cart-list"
            className="op-available-item"
          />
        </li>
        <li>
          <button
            type="button"
            className="cart-item-del"
            style={{ background: "url(/lush/images/ico_cart_clo.svg)" }}
            onClick={() => {
              dispatch(deleteItem(item));
            }}
          >
            삭제
          </button>
        </li>
      </ul>
      <div className="cart-item-info">
        <ul className="flex top">
          <li>
            <div className="img">
              <Link to={"/detail/" + item.id}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
            </div>
          </li>
          <li>
            <p className="subtitle">
              <Link to={"/detail/" + item.id}>{item.title}</Link>
            </p>
            <p className="cate body1">{item.category}</p>
            <p className="option body2"></p>
            <ul className="option">
              <li>
                <span className="choice">용량 : </span>
                <span>125g</span>
              </li>
            </ul>
            <p></p>
            <div className="quantity-box">
              <button
                type="button"
                className="minus"
                onClick={() => {
                  dispatch(decreaseCount(item));
                }}
              >
                <img src="/lush/images/btn_pro_minus.svg" alt="감소" />
              </button>
              <span className="quantity">{item.count}</span>

              <button
                type="button"
                className="plus"
                onClick={() => {
                  dispatch(addCount(item));
                }}
              >
                <img src="/lush/images/btn_pro_plus.svg" alt="증가" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="cart-item-price">
        <ul>
          <li>
            <span>
              총 <span>{item.count}</span> 개
            </span>
            <strong>
              ￦{totalPrice(formatPrice(item.price) * item.count)}
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CartItem;
