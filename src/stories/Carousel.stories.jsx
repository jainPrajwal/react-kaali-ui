import { useEffect, useReducer, useState } from "react";
import  {
  Carousel,
  Controls,
  IconButton,
  LeftArrowImage,
  reducerCallbackFunction,
  RightArrowImage,
  Slide,
  SlideNav,
  SlideNavItem,
  Slides,
} from "../components";

import "../components/Carousel/carousel.css";
import { slides } from "../components/Carousel/slides/slides";

export default {
  title: "Carousel",
  component: Carousel,
};

export const CarouselEcommerce = (args) => {
  const [timer, setTimer] = useState(null);
  const [state, dispatch] = useReducer(reducerCallbackFunction, {
    currentIndex: 0,
  });
  const handleStartTimer = () => {
    const intervalId = setInterval(() => {
      dispatch({
        type: "NEXT",
      });
    }, 5000);
    setTimer(intervalId);
  };
  useEffect(() => {
    handleStartTimer();
  }, []);
  useEffect(() => () => clearInterval(timer), [timer]);
  return (
    <Carousel timerObj={{ timer, setTimer, handleStartTimer }}>
      <Slides>
        {slides.map((image, index) => {
          return (
            <Slide
              key={index}
              id={`image-${index}`}
              image={image.img}
              title={image.title}
              isCurrent={index === state.currentIndex}
              takeFocus={state.takeFocus}
              children={image.content}
            />
          );
        })}
      </Slides>

      <SlideNav>
        {slides.map((image, index) => {
          return (
            <SlideNavItem
              key={index}
              isCurrent={index === state.currentIndex}
              onClick={() => {
                dispatch({ type: "GOTO", payload: index });
              }}
            />
          );
        })}
      </SlideNav>

      <Controls>
        <IconButton
          arial-label="Previous Slide"
          children={<LeftArrowImage className="carousel-button-left" />}
          onClick={() => dispatch({ type: "PREV" })}
        />
        <IconButton
          arial-label="Next Slide"
          children={<RightArrowImage className="carousel-button-right" />}
          onClick={() => dispatch({ type: "NEXT" })}
        />
      </Controls>
    </Carousel>
  );
};
