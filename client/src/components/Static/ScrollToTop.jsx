import React from "react";
import "./styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    showTopBtn && (
      <div title="Go to top" className="top-to-btm icon-position icon-style" onClick={goToTop}>
        <i className="fa-solid fa-arrow-up text-xl"></i>
      </div>
    )
  );
};
export default ScrollToTop;