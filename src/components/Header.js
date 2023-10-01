import { Link } from "react-router-dom";
import "../assets/styles/header.scss";

const Header = ({ sideBtnhandle }) => {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="left-menu">
          <button className="side-btn" onClick={sideBtnhandle}>
            <img
              src="https://definitely92.github.io/lush/images/menu.svg"
              alt="사이드 메뉴 열기 버튼"
            />
          </button>
          <Link to="/" className="logo">
            <img
              src="https://definitely92.github.io/lush/images/logo.svg"
              alt="LUSH 로고"
            />
          </Link>
          <nav>
            <ul>
              <li>이벤트</li>
              <li>라쉬소개</li>
              <li>커뮤니티</li>
              <li>스파</li>
              <li>매장안내</li>
              <li>로그인</li>
            </ul>
          </nav>
        </div>
        <div className="right-menu">
          <ul>
            <li>
              <Link to="/">
                <img
                  src="https://definitely92.github.io/lush/images/search.svg"
                  alt="검색"
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="basket">
                <img
                  src="https://definitely92.github.io/lush/images/bag.svg"
                  alt="장바구니"
                />
                <span className="basket-cnt" id="header_cart_quantity">
                  0
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="member">
                <img
                  src="https://definitely92.github.io/lush/images/account.svg"
                  alt="마이페이지"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
