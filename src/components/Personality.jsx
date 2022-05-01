import React from "react";
import persInfo from "../images/personel.jpg";

export default function Personality() {
  return (
    <div className="container container__img1">
      <img className="image image1" src={persInfo} alt="" />
      <p className="container__img__info">Personal Info</p>
    </div>
  );
}
