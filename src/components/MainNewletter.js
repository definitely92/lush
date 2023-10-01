import useWindowScrollEvent from "../hooks/useWindowScroll";

const MainNewsLetter = () => {
  const scrollPosition = useWindowScrollEvent();
  return (
    <div
      className={`subscribe_area scroll-animation-containerY ${
        scrollPosition > 2600 ? "animate" : ""
      }`}
    >
      <div className="inner">
        <div className="in_box">
          <h3 className="body1">뉴스레터 구독</h3>
          <p className="subsc-notice">
            매주 월요일 오후, 구독자님을 위한 제품과 브랜드 이야기를 전해
            드립니다.구독은 언제든지 해지하실 수 있습니다.
          </p>
          <button className="link_underline">미리보기</button>
          <div className="input-wrap txt_del">
            <input
              type="email"
              className="sch_text_input"
              placeholder="이메일 주소를 입력해주세요"
            />
            <button type="button" id="" className="btn_del">
              <img
                src="https://definitely92.github.io/lush/images/ico_del.svg"
                alt="삭제"
              />
            </button>
            <button type="button" id="footerEmailBtn" className="btn_go">
              <img
                src="https://definitely92.github.io/lush/images/ico_subscribe_off.svg"
                alt="구독"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainNewsLetter;
