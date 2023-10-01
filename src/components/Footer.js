import FooterCore from "./FooterCore";
import "../assets/styles/footer.scss";
import { Link } from "react-router-dom";
import TopBtn from "./TopBtn";

const Footer = () => {
  return (
    <footer>
      <FooterCore />
      <div className="footer-wrap">
        <div className="footer_logo">
          <button type="button" className="btn_logo">
            <img
              src="https://definitely92.github.io/lush/images/lush_footer.svg"
              alt="로고"
            />
          </button>
          <ul className="info">
            <li className="address">
              서울 강남구 학동로 336 (메이트리 빌딩(matree B/D))&nbsp;1층
              주식회사 러쉬코리아
            </li>
            <li>상호명 : 주식회사 러쉬코리아</li>
            <li>대표이사 : 우미령</li>
            <li>
              사업자 등록번호 : 201-81-77964
              <Link to="" className="business-number">
                사업자정보확인
              </Link>
            </li>
            <li>통신판매업 신고번호 : 2022-서울강남-02857</li>
            <li>개인정보보호책임자 : 신상훈</li>
          </ul>
        </div>

        <ul className="footer_menu">
          <li>
            <Link to="">
              <strong>개인정보처리방침</strong>
            </Link>
          </li>
          <li>
            <Link to="">이용약관</Link>
          </li>
          <li>
            <Link to="">영상정보관리지침</Link>
          </li>
        </ul>

        <div className="footer_cs">
          <div>
            <Link to="tel:16442357" className="tel">
              1644-2357
            </Link>
            <Link to="mailto:webmaster@lush.co.kr" className="email">
              webmaster@lush.co.kr
            </Link>
          </div>
          <ul className="cs_time">
            <li>상담전화 13:00 ~ 16:00 (평일)</li>
            <li>카톡상담 10:00 ~ 16:00 (평일)</li>
          </ul>
        </div>

        <ul className="footer_qa">
          <li>
            <Link to="https://pf.kakao.com/_VEbUM/chat?uuid=%40njm0mjywmsvfqiu">
              카톡상담
            </Link>
          </li>
          <li>
            <Link to="/m/mypage/inquiry">1:1 문의</Link>
          </li>
          <li>
            <Link to="/m/mypage/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/m/service/corporate-gift">기업선물</Link>
          </li>
        </ul>

        <p className="copyright">
          COPYRIGHT © LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.
        </p>

        <ul className="sns">
          <li>
            <Link to="">
              <img
                src="https://definitely92.github.io/lush/images/ico_youtube.svg"
                alt="러쉬 유튜브 바로가기"
              />
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src="https://definitely92.github.io/lush/images/ico_kakao.svg"
                alt="러쉬 카카오플러스 바로가기"
              />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/LUSHKOREA">
              <img
                src="https://definitely92.github.io/lush/images/ico_twitter.svg"
                alt="러쉬 트위터 바로가기"
              />
            </Link>
          </li>
          <li>
            <Link to="https://blog.naver.com/lushkr1">
              <img
                src="https://definitely92.github.io/lush/images/ico_blog.svg"
                alt="러쉬 블로그 바로가기"
              />
            </Link>
          </li>
          <li>
            <Link to="https://m.post.naver.com/lushkr1">
              <img
                src="https://definitely92.github.io/lush/images/ico_naver.svg"
                alt="러쉬 네이버 바로가기"
              />
            </Link>
          </li>
        </ul>
      </div>
      <TopBtn />
    </footer>
  );
};

export default Footer;
