import React, { useEffect, useRef, useState } from "react";
import "./card-expand.css"; // Asegúrate de importar tu archivo CSS

import icon from "@assets/img/icons/clear_day.svg";

const CardExpand = ({ title, content }) => {
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      if (element.scrollHeight > element.clientHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card-expand ${expanded ? "expanded" : " "}`}>
      <div className={`content ${expanded ? "expanded" : ""}`} ref={contentRef}>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <p className="title">{title}</p>
        <p>{content}</p>
      </div>
      {showButton && (
        <div className="actions">
          <p className="secondary" onClick={handleExpand}>
            {expanded ? "Cerrar" : "Ver más"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardExpand;
