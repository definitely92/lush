const Cart = () => {
  return (
    <section className="cart">
      <div class="sub-tit">
        <div>
          <button type="button" onclick="history.go(-1)" class="history-back">
            <img
              src="/content/renewal/mobile/images/ico/ico_back.svg"
              alt="이전"
            />
          </button>
        </div>
        <p class="tit">장바구니</p>
      </div>
      <article className="cart-wrap">
        <ul class="tab-btn type2">
          <li className="on">일반배송 (1)</li>
          <li>스파 (0)</li>
        </ul>
        <div className="tab-cont">
          <div className="tab-inner">
            <div className="delivery-time">
              <span>다음날 13:00 까지 주문하면</span>
              <strong class="point">당일 출고</strong>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Cart;
