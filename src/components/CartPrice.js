import { useSelector } from "react-redux";

const CartPrice = () => {
  const cartPrds = useSelector((state) => state.cart);

  const calculateTotalCount = (cartArray) => {
    let totalCount = 0;

    cartArray.forEach((prd) => {
      const count = prd.count;
      totalCount += count;
    });
    return totalCount;
  };

  const calculateTotalPrice = (cartArray) => {
    let totalPice = 0;

    cartArray.forEach((prd) => {
      const price = parseInt(prd.price.replace(/,/g, ""), 10);
      const count = prd.count;
      totalPice += price * count;
    });

    return totalPice;
  };
  const totalCount = calculateTotalCount(cartPrds);
  const totalPice = calculateTotalPrice(cartPrds);

  return (
    <ul className="cart-info">
      <li>
        <span className="total">주문금액</span>
        <strong id="op-select-list-amount">￦ {totalPice}</strong>
      </li>
      <li>
        <span className="charge">배송비</span>
        <strong id="op-select-d-charge">￦ 0</strong>
      </li>
      <li>
        <span id="op-select-list-count">총 {totalCount} 개</span>
        <strong id="total-amount">￦ {totalPice}</strong>
      </li>
    </ul>
  );
};
export default CartPrice;
