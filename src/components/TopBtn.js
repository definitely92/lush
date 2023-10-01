import { useState, useEffect } from "react";

const TopBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`quick-menu scroll-fade-animation ${
        scrollPosition > 300 ? "on" : ""
      }`}
    >
      <ul className="quick__nav">
        <li className="quick-top-btn">
          <button
            type="button"
            className="quick-top"
            style={{
              background:
                "#fff url(https://definitely92.github.io/lush/images/btn_quick_top.svg) no-repeat center center",
            }}
            onClick={handleScrollTop}
          >
            상단으로 이동
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TopBtn;
