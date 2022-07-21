import React, { useRef } from "react";
import Img from "./Img/question__img.svg";

const Item = ({ card }) => {
  const child = useRef(null);

  const show = (i) => {
    child.current.classList.toggle("open");
  };
  return (
    <div ref={child} className={"card__item"} onClick={show}>
      <div className="card__item-main">
        {card.titleEng} <img src={Img} alt="arrow" className="arrow" />
      </div>
      <div className="card__item-desc">{card.subtitleEng}</div>
    </div>
  );
};

export default Item;