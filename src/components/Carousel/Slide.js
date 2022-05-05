import React from "react";
import "./carousel.css";
const Slide = ({ isCurrent, takeFocus, image, id, title, children }) => {
  // let ref = useRef();

  return (
    <li
      // ref={ref}
      aria-hidden={!isCurrent}
      className="carousel-slide Slide"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" , backgroundPosition: "center"}}
    ></li>
  );
};

export { Slide };
