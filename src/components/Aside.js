import "../assets/styles/aside.scss";
import { Link } from "react-router-dom";

const asideMainMenu = [
  {
    id: 1,
    name: "베스트",
    imgSrc: "/images/aside_menu_img01.png",
  },
  {
    id: 2,
    name: "신제품",
    imgSrc: "/images/aside_menu_img02.png",
  },
  {
    id: 3,
    name: "콜라보",
    imgSrc: "/images/aside_menu_img03.png",
  },
  {
    id: 4,
    name: "선물하기",
    imgSrc: "/images/aside_menu_img04.png",
  },
  {
    id: 5,
    name: "배쓰",
    imgSrc: "/images/aside_menu_img05.png",
  },
  {
    id: 6,
    name: "샤워",
    imgSrc: "/images/aside_menu_img06.png",
  },
  {
    id: 7,
    name: "보디",
    imgSrc: "/images/aside_menu_img07.png",
  },
  {
    id: 8,
    name: "헤어",
    imgSrc: "/images/aside_menu_img08.png",
  },
  {
    id: 9,
    name: "프래그런스",
    imgSrc: "/images/aside_menu_img09.png",
  },
  {
    id: 10,
    name: "페이스",
    imgSrc: "/images/aside_menu_img10.png",
  },
  {
    id: 11,
    name: "메이크업",
    imgSrc: "/images/aside_menu_img11.png",
  },
  {
    id: 12,
    name: "기프트",
    imgSrc: "/images/aside_menu_img12.png",
  },
];

const Aside = ({ asideOpen, sideBtnhandle }) => {
  return (
    <aside className={`aside ${asideOpen ? "on" : ""}`}>
      <div className="a-header">
        <Link to="/">
          <img src="/images/logo.svg" alt="로고" />
        </Link>
        <button className="close-aside" onClick={sideBtnhandle}>
          <img src="/images/Icon_close.svg" alt="닫기버튼" />
        </button>
      </div>
      <ul className="main-menu">
        <li>
          <div className="thumbnail">
            {asideMainMenu.map((menu) => (
              <div key={menu.id}>
                <span>
                  <img src={menu.imgSrc} alt={menu.name} />
                </span>
                {menu.name}
              </div>
            ))}
          </div>
          <div className="thumbnail-horizontal">
            <div>
              <span>
                <img src="/images/aside_menu_img13.webp" alt="" />
              </span>
              아트 큐레이션
            </div>
            <div>
              <span>
                <img src="/images/aside_menu_img14.png" alt="" />
              </span>
              기업선물
            </div>
          </div>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu01.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              이벤트
            </span>
          </p>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu02.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              러쉬소개
            </span>
          </p>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu03.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              커뮤니티
            </span>
          </p>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu04.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              스파
            </span>
          </p>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu05.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              매장안내
            </span>
          </p>
        </li>
        <li className="open-menu">
          <p>
            <span
              style={{
                background:
                  "url(/images/ico_main_menu06.svg) left center no-repeat",
                backgroundPosition: "0 center",
              }}
            >
              로그인
            </span>
          </p>
        </li>
      </ul>
      <ul className="sub-menu">
        <li>
          <div>회원가입</div>
        </li>
        <li>
          <div>고객센터</div>
        </li>
        <li>
          <div>선물함</div>
        </li>
      </ul>
    </aside>
  );
};
export default Aside;
