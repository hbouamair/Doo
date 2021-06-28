import React from "react";
import "./styles.css";
const CreditCard = (props) => {
  return (
    <div className="creditCard">
      <img src={props.Img} alt={props.Img} />
      <span>{props.title}</span>
    </div>
  );
};

export default CreditCard;
